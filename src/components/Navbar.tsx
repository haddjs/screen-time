const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 sm:px-8 sm:py-5">
      <div>
        <img src="/logo.png" alt="logo" className="w-20 h-auto sm:w-27" />
      </div>
      <div className="flex gap-4 text-white text-base sm:gap-6 sm:text-lg lg:gap-8 lg:text-xl">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
