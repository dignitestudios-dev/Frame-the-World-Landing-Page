import { FaceBook, Instagram, Linkdin, Twitter } from "@/public/assets/export";
import { Mail, User } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white " id="contact">
      <div className="max-w-300 mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <span className="border border-[#6CACDF] text-[#6CACDF] px-4 py-1 rounded-full text-sm">
            Contact Us
          </span>

          <h2
            className="
          text-[30px]
          sm:text-[36px]
          md:text-[44px]
          font-bold
          mt-6
          text-black
          leading-tight
          "
          >
            Get in Touch — <br /> We're Here to Help!
          </h2>

          <p className="mt-4 text-gray-500 max-w-md">
            Have questions or need assistance? Our team is always ready to guide
            you on your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-10">
            <div>
              <h4 className="font-semibold text-[20px] text-black mb-2">
                Our Contact
              </h4>
              <p className="text-gray-500">832-608-9209</p>
            </div>

            <div>
              <h4 className="font-semibold text-[20px] text-black mb-2">
                Email
              </h4>
              <p className="text-gray-500 break-all">info@frametheworld.org</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8 flex-wrap">
            {[Twitter, FaceBook, Instagram, Linkdin].map((Icon, index) => (
              <div
                key={index}
                className="
                w-10 h-10
                border
                rounded-full
                flex
                items-center
                justify-center
                hover:bg-gray-100
                transition
                "
              >
                <Image src={Icon} className="w-5" alt={`social-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <form
          className="
        bg-[#F4EFE6]
        p-6
        sm:p-8
        md:p-10
        rounded-2xl
        space-y-6
        "
        >
          <div>
            <h3 className="text-[20px] md:text-[22px] font-semibold text-black">
              Send Us a Message
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Have questions or need assistance? Our team is always ready to
              guide you on your journey.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-gray-500">
              Full Name
            </label>

            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                id="name"
                type="text"
                className="w-full bg-white text-black pl-11 pr-4 py-3 rounded-lg outline-none"
                placeholder="Your full name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email
            </label>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                id="email"
                type="email"
                className="w-full bg-white text-black pl-11 pr-4 py-3 rounded-lg outline-none"
                placeholder="yourwinzy@gmail.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm text-gray-500">
              Subject
            </label>

            <input
              id="subject"
              type="text"
              className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none"
              placeholder="Your subject"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-gray-500">
              Message
            </label>

            <textarea
              id="message"
              className="w-full bg-white text-black px-4 py-3 rounded-lg h-28 outline-none resize-none"
              placeholder="Your message"
            />
          </div>

          <button
            className="
          w-full
          bg-[#6CACDF]
          text-white
          py-3
          rounded-full
          font-medium
          hover:bg-[#5a98c6]
          transition
          "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
