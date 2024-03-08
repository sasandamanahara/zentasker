import Link from "next/link";
import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = Roboto({
  subsets: ["latin"],
  weight: ["900"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 trasition items-center gap-x-2 md:flex">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />

        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Zentasker
        </p>
      </div>
    </Link>
  );
};
