"use client";
import {
  white_facebook,
  white_instagram,
  White_logo,
} from "@/public/assets/export";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; 



export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-[#131212] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex items-center gap-10">
        <Image src={White_logo} alt="Frame The World" className="w-37.5" />

        <div className="flex gap-4">
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition">
            <Image src={white_facebook} className="w-6" alt="facebook" />
          </div>

          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition">
            <Image src={white_instagram} className="w-6" alt="instagram" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4">
        <p>Copyright © 2026 Frametheworld. All Rights Reserved.</p>

        <div className="flex gap-6">
          <Link href="/terms-of-services" className="hover:text-white transition">
            Terms of Services
          </Link>

          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
