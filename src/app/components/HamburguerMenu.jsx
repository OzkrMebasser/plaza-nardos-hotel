"use client";

const HamburguerMenu = ({ toggleMobileMenu, isMobileMenuOpen, isScrolled }) => {
  return (
    <div className="flex items-center md:hidden">
      <button
        className="flex flex-col h-12 w-12 border-2 rounded justify-center items-center group border-none"
        onClick={toggleMobileMenu}
      >
        
        <div
          className={`h-1 w-6 my-[3px] rounded-full bg-[#2b3163] transition ease transform duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""
          }`}
        />
        <div
          className={`h-1 w-6 my-[2px] rounded-full bg-[#2b3163] transition ease transform duration-300 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`h-1 my-[3px] rounded-full bg-[#2b3163] transition ease transform duration-300 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-[9px] w-6" : "w-4"
          }`}
        />
      </button>
    </div>
  );
};

export default HamburguerMenu;
