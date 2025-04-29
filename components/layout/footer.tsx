import Image from "next/image";
import logo from "@/public/imgs/logo.svg";
import data from "@/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center border-t gap-1">
      <div className="hidden lg:flex h-7">
        <Image
          src={logo}
          alt="AK Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <div className="flex items-center gap-6 lg:hidden h-10">
        {data.links.map(
          (link) =>
            link.link && (
              <Link
                key={link.name}
                href={link.link}
                target="_blank"
                className={cn("size-7 flex items-center justify-center")}
                aria-label={link.name}
              >
                <link.icon className="size-4" />
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
