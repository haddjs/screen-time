const Registration = () => {
  return (
    <section className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-6 md:px-16 xl:px-30 py-12 md:py-20 items-center">
      <div className="flex justify-center">
        <img
          src="/board.png"
          alt="board game"
          className="w-64 sm:w-80 lg:w-150 h-auto"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl text-[#324382]">
          Dapatkan Board Game <br /> Misi Bebas Layar secara gratis!
        </h1>
        <br /> <br />
        <h2 className="text-lg md:text-2xl text-[#324382]">
          Jadilah Bagian dari Gerakan <br /> #1JamBatasLayarTumbuhLebihBesar
        </h2>
        <br />
        <span className="text-sm text-zinc-700">
          Kampanye ini bertujuan meningkatkan kesadaran masyarakat, khususnya
          orang tua, mengenai pentingnya pengawasan dan pembatasan screen time
          pada anak usia dini.
          <br /> <br />
          Bukan untuk menjauhkan anak dari teknologi, tetapi membantu orang tua
          menciptakan keseimbangan antara penggunaan layar dengan aktivitas
          bermain, bergerak, dan bereksplorasi.
        </span>
        <div className="flex justify-start py-7">
          <button className="bg-[#324382] text-white py-3 px-5 sm:py-4 sm:px-5 rounded-3xl">
            Daftar Disini!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
