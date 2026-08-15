const Why = () => {
  return (
    <section className="bg-[#FFFFC0]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="flex">
          <img
            src="/Frame 1.png"
            alt="ilustrasi anak"
            className="w-56 sm:w-72 lg:w-96 h-auto"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-[#324382] text-3xl md:text-4xl">
            Mengapa Screen Time perlu dibatasi?
          </h1>
          <span className="text-sm">
            Anak usia dini berada pada masa emas (golden age), yaitu periode
            ketika perkembangan fisik, kognitif, bahasa, sosial, dan emosional
            berlangsung sangat pesat.
            <br />
            <br />
            Apabila waktu penggunaan gadget dilakukan secara berlebihan, anak
            akan kehilangan kesempatan untuk memperoleh pengalaman belajar
            melalui aktivitas nyata, seperti bermain, bergerak, berinteraksi
            dengan lingkungan, dan membangun hubungan sosial.
            <br />
            <br />
            Oleh karena itu, yang perlu diperhatikan bukan hanya apa yang
            ditonton anak, tetapi juga berapa lama waktu yang dihabiskan di
            depan layar.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Why;
