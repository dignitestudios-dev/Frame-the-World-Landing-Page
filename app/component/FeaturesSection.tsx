"use client";

import { Animated_Slide } from "@/public/assets/export";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useModal } from "../context/ModalContext";

export default function FeaturesSection() {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-300 mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="bg-gray-100 flex justify-center items-center p-8 md:p-12 rounded-xl">
          <Image
            src={Animated_Slide}
            alt="Animated Slide"
            className="
            rounded-xl
            w-55
            sm:w-65
            md:w-75
            lg:w-[320px]
            rotate-[-10deg]
            "
          />
        </div>

        <div className="text-center md:text-left">
          <h2
            className=" capitalize
          text-[28px]
          sm:text-[34px]
          md:text-[40px]
          lg:text-[48px]
          font-bold
          leading-[1.2]
          text-black
          "
          >
            Non-AI Generated Images without People in the Frame
          </h2>

          <p className="mt-4 text-[16px] text-[#000000] max-w-130 mx-auto md:mx-0">
            Our AI editor ensures every picture is original, non AI generated,
            and contains no filters. You can even use the AI tool to remove
            people from your own images before posting.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={() => openModal("Sign Up for Frame The World")}
              className="flex items-center gap-3 bg-white border border-gray-300 text-black rounded-full pl-6 pr-2.5 py-2.5 text-base font-medium hover:bg-gray-100 transition cursor-pointer shadow-sm hover:scale-105"
            >
              Sign Up
              <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
                <ArrowRight size={16} className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
