const Hero = () => {
  return (
    <section className="text-white px-6 md:px-16 lg:px-28 xl:px-44 2xl:px-60">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl xl:text-6xl text-center">
          Screen Time
          <br />
          Cukup 1 Jam
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-center leading-normal">
          Membatasi screen time bukan berarti membatasi anak. Justru memberi
          lebih banyak ruang untuk bermain, belajar, dan menciptakan cerita baru
          setiap hari.
        </p>
      </div>

      <div className="flex justify-center py-7">
        <button className="bg-[#324382] py-3 px-5 sm:py-4 sm:px-5 rounded-3xl">
          Pelajari lebih lanjut
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
        <img
          src="/Asset 4.png"
          alt="asset 4"
          className="w-full aspect-square object-contain"
        />
        <img
          src="/Asset 1.png"
          alt="asset 1"
          className="w-full aspect-square object-contain"
        />
        <img
          src="/Asset 2.png"
          alt="asset 2"
          className="w-full aspect-square object-contain"
        />
        <img
          src="/Asset 3.png"
          alt="asset 3"
          className="w-full aspect-square object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
