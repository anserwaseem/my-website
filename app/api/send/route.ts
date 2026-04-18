import { Resend } from "resend";
import { NextResponse } from "next/server";
import data from "@/data";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per 15 minutes

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap.get(ip)!;
  // Remove old timestamps
  const validTimestamps = timestamps.filter((ts) => now - ts < windowMs);
  rateLimitMap.set(ip, validTimestamps);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  return false;
}

async function verifyCaptcha(token: string): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET_KEY;
  if (!secret) return false;

  try {
    const response = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const { from_name, from_email, message, captchaToken, website } = body;

    if (website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!captchaToken || !(await verifyCaptcha(captchaToken))) {
      return NextResponse.json({ error: "Invalid CAPTCHA" }, { status: 400 });
    }

    const emailData = await resend.emails.send({
      from: `${data.contact.name} <onboarding@resend.dev>`,
      to: [data.contact.email],
      subject: `New Contact Form Message from ${from_name}`,
      text: `
Name: ${from_name}
Email: ${from_email}
Message: ${message}
      `,
    });

    return NextResponse.json(emailData);
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
