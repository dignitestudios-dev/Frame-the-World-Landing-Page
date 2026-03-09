import { HeroBg } from "@/public/assets/export";

export default function Hero() {
  return (
    <section
      className="min-h-screen md:min-h-[85vh] lg:min-h-225 
      bg-cover bg-center bg-no-repeat flex items-end"
      style={{ backgroundImage: `url(${HeroBg.src})` }}
      id="home"
    >
      <div className="max-w-195 px-6 pb-16 md:pb-24 text-white">
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

        <p className="mt-4 text-[16px] md:text-lg max-w-130">
          Explore collections and upload your own images with ease.
        </p>
      </div>
    </section>
  );
}
