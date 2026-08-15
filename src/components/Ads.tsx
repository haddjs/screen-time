const Ads = () => {
  return (
    <section className="bg-[#0966A0] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6 md:px-16 xl:px-30 py-12 md:py-20 items-center">
      <div className="flex flex-col justify-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl">
          Bermain Lebih Seru di Dunia Nyata
        </h1>
        <br />
        <span className="text-sm">
          Misi Bebas Layar merupakan board game interaktif yang dirancang
          sebagai media pendukung kampanye untuk membantu orang tua mengurangi
          waktu penggunaan gadget pada anak usia 4–6 tahun.
          <br /> <br />
          Melalui berbagai tantangan gerak, eksplorasi, kreativitas, dan
          aktivitas bersama, anak diajak kembali menikmati pengalaman bermain di
          dunia nyata dengan cara yang menyenangkan.
        </span>
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="/logo boardgame.png"
          alt="logo board game"
          className="w-56 sm:w-72 lg:w-120 h-auto"
        />
      </div>
    </section>
  );
};

export default Ads;
