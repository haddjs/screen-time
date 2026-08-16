import TornBorder from "./TornBorder";

const Hero = () => {
  return (
    <>
      <section className="text-white px-6 md:px-16 lg:px-28 xl:px-44 2xl:px-60">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl text-center">
            Screen Time
            <br />
            Cukup 1 Jam
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-center leading-normal">
            Membatasi screen time bukan berarti membatasi anak. Justru memberi
            lebih banyak ruang untuk bermain, belajar, dan menciptakan cerita
            baru setiap hari.
          </p>
        </div>

        <div className="flex justify-center py-7">
          <a
            href="#apa-itu-screen-time"
            className="bg-[#324382] text-white py-3 px-5 sm:py-4 sm:px-5 rounded-3xl"
          >
            Pelajari lebih lanjut
          </a>
        </div>

        <div className="grid grid-cols-2 items-end gap-4 md:grid-cols-4 xl:flex xl:items-end xl:justify-center xl:gap-0 max-w-5xl mx-auto">
          <img
            src="/asset4.png"
            alt="asset 4"
            className="w-full h-auto object-contain xl:w-80 xl:h-70 xl:object-fill"
          />
          <img
            src="/asset1.png"
            alt="asset 1"
            className="w-full h-auto object-contain xl:w-80 xl:h-70 xl:object-fill xl:-mx-17"
          />
          <img
            src="/asset2.png"
            alt="asset 2"
            className="w-full h-auto object-contain xl:w-80 xl:h-70 xl:object-fill"
          />
          <img
            src="/asset3.png"
            alt="asset 3"
            className="w-full h-auto object-contain xl:w-80 xl:h-70 xl:object-fill xl:-ms-20"
          />
        </div>
      </section>
      <div className="relative z-10 -mt-5 rotate-180">
        <TornBorder src="/Vector4.png" bgClass="bg-transparent" />
      </div>
    </>
  );
};

export default Hero;
