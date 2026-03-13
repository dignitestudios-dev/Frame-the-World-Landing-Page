import {
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
} from "@/public/assets/export";
import Image from "next/image";

const images = [
  { src: GalleryImage1, h: "lg:h-[260px]" },
  { src: GalleryImage2, h: "lg:h-[200px]" },
  { src: GalleryImage3, h: "lg:h-[140px]" },
  { src: GalleryImage4, h: "lg:h-[200px]" },
  { src: GalleryImage5, h: "lg:h-[260px]" },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-24 w-280 max-w-full mx-auto" id="about">
      <div className="mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory lg:hidden pb-4">
          {images.map((img, i) => (
            <div key={i} className="min-w-45 snap-center shrink-0">
              <Image
                src={img.src}
                alt={`gallery-${i}`}
                className="w-full h-55 rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative hidden lg:flex justify-center items-end gap-8 mb-14">
          {images.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={`gallery-${i}`}
              className={`w-40- ${img.h} rounded-2xl object-cover`}
            />
          ))}

          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-linear-to-t from-white via-white/80 to-transparent"></div>
        </div>

        <div className="text-center max-w-225 mx-auto">
          <h2 className="capitalize text-[28px] sm:text-[36px] md:text-[44px] lg:text-[55px] font-bold leading-[1.2] text-black">
            Effortlessly Upload, Organize, and share your Visual Stories with
            other Travel Agents with our intuitive platform.
          </h2>

          <p className="mt-4 text-gray-500 text-sm md:text-base">
            Effortlessly upload, organize, and share your visual stories with
            our intuitive platform.
          </p>
        </div>
      </div>
    </section>
  );
}
