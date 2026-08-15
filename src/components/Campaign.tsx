const Campaign = () => {
  return (
    <div id="kampanye" className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6 md:px-16 xl:px-30 py-12 md:py-20 items-center">
      <div className="flex justify-center">
        <img
          src="/logo.png"
          alt="logo"
          className="w-40 sm:w-64 lg:w-130 h-auto"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-[#324382] text-lg md:text-3xl">
          #1JamBatasLayarTumbuhLebihBesar
        </h1>
        <br />
        <span className="text-zinc-700 text-sm">
          Kampanye ini bertujuan meningkatkan kesadaran masyarakat, khususnya
          orang tua, mengenai pentingnya pengawasan dan pembatasan screen time
          pada anak usia dini.
          <br /> <br />
          Bukan untuk menjauhkan anak dari teknologi, tetapi membantu orang tua
          menciptakan keseimbangan antara penggunaan layar dengan aktivitas
          bermain, bergerak, dan bereksplorasi.
        </span>
      </div>
    </div>
  );
};

export default Campaign;
