import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import data from "@/data";
import type { ChatMessage } from "@/shared/types";
import { MESSAGE_HISTORY_LIMIT } from "@/shared/constants";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const createContextFromData = () => {
  const projects = data.projects
    .map((p) => `- ${p.title}: ${p.description}`)
    .join("\n");

  const skills = data.technologies.map((s) => s.name).join(", ");

  const experiences = data.experiences
    .map((exp) => {
      const achievements = exp.achievements
        .map((achievement) => `    • ${achievement}`)
        .join("\n");
      const techs = exp.technologiesUsed.join(", ");

      return `
        ${exp.role} at ${exp.company} (${exp.duration})
        Location: ${exp.location}
        ${exp.description}
        
        Key Achievements:
        ${achievements}
        
        Technologies: ${techs}`;
    })
    .join("\n");

  return `
    About Anser Waseem:
    - Full Stack Engineer specializing in, React.js, Next.js, Node.js, JavaScript, TypeScript, Tailwind CSS, Electron.js, Firebase, Vite, PostgreSQL, and AI Integration
    - Over 3 years of experience in web development and 1 year of experience in AI implementation
    - Email: ${data.contact.email}
    
    Professional Experience:
    ${experiences}
    
    Core Expertise:
    - React and Next.js Development: Building high-performance, scalable applications
    - AI Integration Specialist: Implementing cutting-edge AI features in web applications
    - Full Stack Development: ${skills}
    
    AI Integration Capabilities:
    1. Chatbots & Conversational AI:
       - Custom AI assistants like this one
       - Customer service automation
       - Interactive FAQ systems
    
    2. Content & Text Processing:
       - AI-powered content generation
       - Automated text summarization
       - Smart document analysis
    
    3. Recommendation Systems:
       - Personalized user experiences
       - Product recommendations
       - Content suggestion engines
    
    Notable Projects:
    ${projects}
    
    Services:
    - Custom Web Applications
    - Custom AI Feature Development
    - Desktop App Development
    - Performance Optimization
    - API Development & Integration
    - Technical Consulting & Code Audits
    
    Additional Information: 
    - Experienced with modern web stacks: Next.js, React.js, Node.js, Electron.js
    - Skilled in building offline-first and cloud-connected applications
    - Proficient in database management with PostgreSQL, SQLite, and Firebase
    - Expertise in performance tuning, scalability, and security best practices
    - Strong background in modular architecture and monorepo management (Turborepo, pnpm)
    - Focus on delivering clean, maintainable, and business-focused codebases
  `;
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const chat = genAI.chats.create({
      model: "gemini-2.0-flash",
      config: {
        temperature: 0.7,
        topK: 1, // greedy decoding - most probable
        topP: 1,
        maxOutputTokens: 2048,
      },
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI assistant for Anser Waseem. Use the following information to help answer questions:
            ${createContextFromData()}
            
            Guidelines:
            - Be enthusiastic and professional
            - Provide specific, detailed examples from the context
            - Highlight relevant projects and technical capabilities
            - Be confident about AI integration abilities
            - Emphasize practical, real-world applications
            - Keep responses well-structured with clear sections
            - Use bullet points or numbered lists for better readability
            - Always mention relevant experience and past projects
            - For specific project inquiries, guide users to the contact form
            - Focus on Anser's expertise in React, Next.js, Node.js, Electron.js, Firebase, PostgreSQL, and advanced AI integration`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "I understand. I'll act as Anser's AI assistant, providing detailed, confident responses about his extensive experience in AI integration, React.js development, and full-stack capabilities. I'll emphasize his practical approach and successful project implementations while maintaining professionalism and enthusiasm.",
            },
          ],
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: ChatMessage) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        })),
      ],
    });

    const response = await chat.sendMessage({
      message: messages[messages.length - 1].content,
    });

    return NextResponse.json({ content: response.text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 },
    );
  }
}
