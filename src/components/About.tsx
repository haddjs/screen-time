import TornBorder from "./TornBorder";
import Why from "./Why";

const About = () => {
  return (
    <>
      <section id="apa-itu-screen-time" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 py-12 md:py-20 px-6 md:px-16 xl:px-30">
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl text-[#324382]">
              Apa itu <br /> Screen Time?
            </h1>
          </div>
          <div className="text-sm text-zinc-700">
            Screen time adalah waktu yang dihabiskan seseorang untuk menggunakan
            perangkat yang memiliki layar, seperti smartphone, tablet, televisi,
            maupun laptop. Di era digital saat ini, penggunaan gadget telah
            menjadi bagian dari kehidupan sehari-hari, termasuk pada anak usia
            dini.
            <br /> <br />
            Teknologi memberikan banyak manfaat sebagai sarana hiburan,
            informasi, dan komunikasi. Namun, penggunaan gadget pada anak tetap
            memerlukan pengawasan serta pembatasan durasi agar tidak mengganggu
            proses tumbuh kembangnya.
          </div>
        </div>

        <div className="px-30">
          <TornBorder src="/Vector4.png" bgClass="bg-[#FFFFC0]" />
        </div>
      </section>
      <div className="px-6 md:px-16 xl:px-30">
        <Why />
      </div>
    </>
  );
};

export default About;
