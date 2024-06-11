import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-6">
        <div className="flex justify-between">
          <Link href="/">
            <span className="text-2xl font-semibold">EdooTech</span>
          </Link>
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-700">INFORMATION</p>
            <Link href="/">
              <span className="text-sm font-medium text-gray-600">About us</span>
            </Link>
            <Link href="/">
              <span className="text-sm font-medium text-gray-600">FAQs</span>
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-gray-700">LEGAL</p>
            <Link href="/">
              <span className="text-sm font-medium text-gray-600">Privacy Policy</span>
            </Link>
            <Link href="/">
              <span className="text-sm font-medium text-gray-600">Terms and Conditions</span>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="border-2 border-gray-400 py-2 pl-6 pr-2 flex gap-6 rounded-[32px] max-w-md">
              <input placeholder="Enter your email" className="text-xs lg:text-sm lg:leading-5 leading-[15px] placeholder:text-[#545454] outline-none border-none !bg-transparent w-full" />
              <button className="py-[10px] lg:py-4 px-6 text-sm leading-[18px] bg-primary text-white hover:text-yellow rounded-full font-semibold whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-6 pt-3">
          <span className="block text-sm text-muted-foreground sm:text-center">
            © {new Date().getFullYear()}{" "}
            <a
              target="_blank"
              href="https://tryconvo.vercel.app/"
              className="hover:underline"
            >
              EdooTech
            </a>
            . All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
