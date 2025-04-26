import Image from "next/image";
import logo from "@/public/imgs/logo.svg";

export default function Footer() {
  return (
    <div className="w-full h-7 bg-background flex justify-center border-t">
      <Image
        src={logo}
        alt="AK Logo"
        width={120}
        height={120}
        className="object-contain"
      />
    </div>
  );
}
