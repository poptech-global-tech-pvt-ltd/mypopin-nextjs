import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="py-24 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <Image src="/404.png" width={600} height={600} alt="404 image" />
        </div>
        <div className="flex items-center justify-center text-[#484848] text-[30px]">Oh-Oh, Looks Like You're Lost!</div>
        <div className="flex items-center justify-center text-[#999999] text-[20px]">The page you're looking for has been moved, renamed or doesn't exist</div>
        <div className="flex items-center justify-center">
          <Link href={"/"}>
            <Button className="rounded-full text-white bg-[#F46651] shadow-md">Go to Home</Button>
          </Link>
        </div>
      </section>
    </>
  );
}