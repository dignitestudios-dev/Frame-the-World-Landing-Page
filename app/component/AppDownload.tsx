import { Apple, DownloadSection, PlayStore } from "@/public/assets/export";
import Image from "next/image";

export default function AppDownload() {
  return (
    <section className="py-20 md:py-32 bg-[#25252D] text-white relative overflow-hidden" id="why-us">
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

      <div className="flex justify-center mt-16 md:mt-20 px-6">
        <Image
          src={DownloadSection}
          alt="Download Section"
          className="
    w-full
    max-w-[320px]
    sm:max-w-112.5
    md:max-w-175
    lg:max-w-none
    "
        />
      </div>
    </section>
  );
}
