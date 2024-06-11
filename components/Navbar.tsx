import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "sticky h-14 inset-x-0 top-0 z-30 border-b border-gray-200  bg-primary backdrop-blur-lg transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            <Image
              src="/logo.png"
              alt="convo logo"
              width={50}
              height={50}
              quality={100}
              className="w-7 h-7"
            />
            <span className="text-2xl font-semibold">EdooTech</span>
          </Link>
          <div className="flex gap-1 sm:gap-4 items-center">

            <Link
              className={buttonVariants({
                size: "sm",
                className: "sm:hidden mr-3",
              })}
              href="/dashboard"
            >
              Dashboard
            </Link>

            <div className="hidden items-center space-x-4 sm:flex">
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  className={buttonVariants({
                    size: "sm",
                  })}
                  href="/sign-up"
                >
                  Get started
                </Link>
              </>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
