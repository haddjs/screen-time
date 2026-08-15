const ScreenTime = () => {
  return (
    <section className="bg-white px-6 md:px-16 xl:px-30 py-12 md:py-20">
      <h1 className="text-2xl md:text-3xl text-[#324382] text-center md:text-left">
        Batas Screen Time menurut WHO dan AAP
      </h1>
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-9">
        <div className="flex flex-col gap-3">
          <img src="/3.png" alt="umur 0-18 bulan" className="w-full h-auto" />
          <h2 className="text-xl text-zinc-800">Umur 0 - 18 Bulan</h2>
          <div className="flex flex-col gap-5 text-sm text-justify text-zinc-700">
            <span>
              Anak tidak boleh terpapar layar digital sama sekali atau yang
              dikenal dengan istilah zero screen time.
            </span>
            <span>
              Satu-satunya pengecualian yang diperbolehkan adalah video call
              dengan keluarga.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <img src="/1.png" alt="umur 18-24 bulan" className="w-full h-auto" />
          <h2 className="text-xl text-zinc-800">Umur 18 - 24 Bulan</h2>
          <div className="text-sm text-zinc-700 text-justify">
            <span>
              Diperbolehkan mulai memperkenalkan konten digital, namun dengan
              syarat yang ketat, dan harus dengan pendampingan penuh dari orang
              tua.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <img src="/4.png" alt="umur 2-5 tahun" className="w-full h-auto" />
          <h2 className="text-xl text-zinc-800">Umur 2 - 5 Tahun</h2>
          <div className="text-sm text-zinc-700 text-justify">
            <span>
              Batas maksimal screen time sebesar 1 jam per hari, khusus untuk
              konten edukatif dan dengan pendampingan orang tua.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <img src="/2.png" alt="umur 6-12 tahun" className="w-full h-auto" />
          <h2 className="text-xl text-zinc-800">Umur 6 - 12 Tahun</h2>
          <div className="text-sm text-zinc-700 text-justify">
            <span>
              Batas maksimal 2 jam untuk pengguna layar yang bersifat hiburan.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenTime;
