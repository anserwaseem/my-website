"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animation from "@/public/lottie/person.json";

export default function PersonAnimation({ className }: { className?: string }) {
  return <Lottie className={className} animationData={animation} loop={true} />;
}
