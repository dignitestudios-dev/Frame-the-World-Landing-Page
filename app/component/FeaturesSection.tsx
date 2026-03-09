import { Animated_Slide } from "@/public/assets/export";
import Image from "next/image";

export default function FeaturesSection() {
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
            className="
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
        </div>
      </div>
    </section>
  );
}
