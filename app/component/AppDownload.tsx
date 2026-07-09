"use client";

import {
  Apple,
  PlayStore,
  PhoneLogin,
  PhoneEiffel,
  PhoneHome,
  PhoneOnboarding,
  PhoneProfile,
} from "@/public/assets/export";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const phoneScreens = [
  { src: PhoneLogin, alt: "Login Screen" },
  { src: PhoneEiffel, alt: "Eiffel Tower Screen" },
  { src: PhoneHome, alt: "Home Screen" },
  { src: PhoneOnboarding, alt: "Onboarding Screen" },
  { src: PhoneProfile, alt: "Profile Screen" },
  { src: PhoneLogin, alt: "Login Screen 2" },
  { src: PhoneEiffel, alt: "Eiffel Tower Screen 2" },
  { src: PhoneHome, alt: "Home Screen 2" },
  { src: PhoneOnboarding, alt: "Onboarding Screen 2" },
  { src: PhoneProfile, alt: "Profile Screen 2" },
];

export default function AppDownload() {
  return (
    <section
      className="py-20 md:py-32 bg-[#25252D] text-white relative overflow-hidden"
      id="why-us"
    >
      <div className="max-w-225 mx-auto text-center px-6">
        <p className="border border-white/20 inline-block px-4 py-2 rounded-full text-sm">
          Mobile App
        </p>

        <h2
          className="
        text-[32px]
        sm:text-[40px]
        md:text-[52px]
        lg:text-[64px]
        font-bold
        mt-6
        leading-tight
        "
        >
          Download Our Mobile App
        </h2>

        <p className="text-white/60 mt-3 text-sm md:text-base">
          Start Discovering and Sharing Inspiration Today
        </p>

        <div
          className="
        flex
        flex-col
        sm:flex-row
        justify-center
        items-center
        gap-4
        sm:gap-6
        mt-8
        "
        >
          <button
            className="
          flex items-center gap-2
          bg-white text-black
          px-6 py-3
          rounded-full
          hover:bg-gray-200
          transition
          "
          >
            <Image src={Apple} alt="App Store" className="w-5 h-5" />
            App Store
          </button>

          <button
            className="
          flex items-center gap-2
          bg-white text-black
          px-6 py-3
          rounded-full
          hover:bg-gray-200
          transition
          "
          >
            <Image src={PlayStore} alt="Play Store" className="w-5 h-5" />
            Play Store
          </button>
        </div>
      </div>

      {/* Marquee Phone Slider */}
      <div className="mt-16 md:mt-20 relative pb-8">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #25252D 0%, transparent 100%)",
          }}
        />
        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #25252D 0%, transparent 100%)",
          }}
        />

        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover={true}
          loop={0}
          autoFill={true}
        >
          {phoneScreens.map((phone, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 mx-3"
              style={{
                marginTop: i % 2 === 0 ? "0px" : "28px",
              }}
            >
              {/* Phone frame shell */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl"
                style={{
                  width: "250px",
                  height: "500px",
                  border: "2px solid rgba(255,255,255,0.12)",
                  background: "#1a1a22",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06) inset",
                }}
              >
                {/* Top notch / dynamic island */}
                <div
                  className="absolute top-3 left-1/2 -translate-x-1/2 z-20 rounded-[20px] bg-black"
                  style={{ width: "60px", height: "16px" }}
                />

                {/* Screen image */}
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  fill
                  className="object-cover"
                  sizes="250px"
                />

                {/* Subtle glare overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 60%)",
                  }}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
