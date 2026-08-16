const Impact = () => {
  return (
    <section className="bg-[#0966A0] px-6 md:px-16 xl:px-30 pt-12 md:pt-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
        <div className="text-white flex flex-col gap-6 lg:gap-8">
          <h1 className="text-2xl md:text-3xl">Dampak Screen Time yang Berlebihan</h1>
          <span className="max-w-xl text-sm md:text-base">
            Penggunaan gadget yang melebihi batas yang dianjurkan dapat
            memengaruhi berbagai aspek tumbuh kembang anak, di antaranya:
          </span>
        </div>

        <div className="text-white flex flex-col gap-6 lg:gap-8">
          <ol className="list-decimal list-inside space-y-1 text-sm md:text-base">
            <li>Mata mudah lelah dan terasa tidak nyaman</li>
            <li>Lebih mudah marah dan sulit mengendalikan emosi</li>
            <li>Perkembangan kemampuan berbicara menjadi terhambat</li>
            <li>Mengalami kecanduan</li>
            <li>Konsentrasi menjadi mudah teralihkan</li>
            <li>Kualitas tidur menjadi kurang optimal</li>
            <li>Interaksi dengan orang sekitar berkurang</li>
            <li>Kepala terasa pusing setelah menatap layar</li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-2 items-end md:grid-cols-4 gap-4 md:gap-6 xl:flex xl:items-end xl:justify-center xl:gap-0 xl:-space-x-12 pt-10">
        <img src="/dampak1.png" alt="dampak 1" className="w-full h-auto xl:w-72 2xl:w-90" />
        <img src="/dampak3.png" alt="dampak 3" className="w-full h-auto xl:w-72 2xl:w-90" />
        <img src="/dampak2.png" alt="dampak 2" className="w-full h-auto xl:w-72 2xl:w-90" />
        <img src="/dampak4.png" alt="dampak 4" className="w-full h-auto xl:w-72 2xl:w-90" />
      </div>
    </section>
  );
};

export default Impact;
