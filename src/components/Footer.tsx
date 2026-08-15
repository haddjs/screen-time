import Copyright from "./Copyright";

const Footer = () => {
  return (
    <section id="contact" className="bg-[#FFFF85]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 xl:px-30 py-12 md:py-20">
        <div className="flex items-start justify-center md:justify-start gap-8 md:gap-15 text-lg md:text-xl text-zinc-700">
          <ul className="flex flex-col gap-4 md:gap-5">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#kampanye">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 md:gap-5">
            <li>
              <a href="https://www.instagram.com/1jam_bataslayar?igsh=MWgwc3B4ZGl4Ymh1YQ%3D%3D&utm_source=qr">
                Instagram
              </a>
            </li>
            <li>Email</li>
          </ul>
        </div>

        <div className="flex gap-6 md:gap-10 justify-center md:justify-end items-center">
          <img
            src="/logo komdigi.png"
            alt="logo komdigi"
            className="w-48 sm:w-72 lg:w-100 h-auto"
          />
          <img
            src="/logo.png"
            alt="logo screen time"
            className="w-20 sm:w-35 h-auto"
          />
        </div>
      </div>

      <div className="py-4 md:py-5 bg-[#0966A0]">
        <Copyright />
      </div>
    </section>
  );
};

export default Footer;
