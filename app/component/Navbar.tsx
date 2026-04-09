"use client";

import { Logo } from "@/public/assets/export";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur bg-white/40 border-b border-white/20">
      <div className="max-w-330 mx-auto flex items-center justify-between px-6 py-4">
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex items-center gap-10 text-[16px] font-medium text-black">
          <Link href="/" className="hover:text-[#6CACDF] transition">
            Home
          </Link>

          <Link href="#about" className="hover:text-[#6CACDF] transition">
            About
          </Link>

          <Link href="#why-us" className="hover:text-[#6CACDF] transition">
            Why Us
          </Link>

          <Link href="#contact" className="hover:text-[#6CACDF] transition">
            Contact
          </Link>
        </nav>

        <Image src={Logo} alt="Logo" className="w-30 md:w-37.5" />

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border text-black border-gray-200 rounded-full pl-5 pr-2 py-2 text-sm font-medium hover:bg-gray-100 transition">
            Download Mobile App
            <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
              <ChevronDown size={16} className="text-white" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden ">
          <div className="flex flex-col items-center gap-6 py-6 text-black font-medium">
            <Link href="#home" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="#about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="#why-us" onClick={() => setOpen(false)}>
              Why Us
            </Link>

            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full">
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
