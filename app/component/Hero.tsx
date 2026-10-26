"use client";

import { HeroBg } from "@/public/assets/export";
import { ArrowRight } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      className="min-h-screen md:min-h-[85vh] lg:min-h-225 
      bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroBg.src})` }}
      id="home"
    >
      <div className="max-w-195 px-6 py-16 md:py-24 text-white text-center flex flex-col items-center">
        <h1
          className="
        text-[34px] 
        sm:text-[42px] 
        md:text-[56px] 
        lg:text-[72px] 
        leading-[1.1] 
        font-bold"
        >
          Where Travel Advisors Frame the World Together.
        </h1>

        <p className="mt-4 text-[16px] md:text-lg max-w-130 mx-auto">
          Explore collections and upload your own images with ease.
        </p>

        <button
          onClick={() => openModal("Sign Up for Frame The World")}
          className="mt-8 flex items-center gap-3 bg-white border border-gray-200 text-black rounded-full pl-6 pr-2.5 py-2.5 text-base font-medium hover:bg-gray-100 transition cursor-pointer shadow-lg hover:scale-105"
        >
          Sign Up
          <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
            <ArrowRight size={16} className="text-white" />
          </div>
        </button>
      </div>
    </section>
  );
}
