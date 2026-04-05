import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import a from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 outline-none group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={a}
            alt="logo"
            className="w-9 h-9 object-contain rounded-lg group-hover:scale-105 transition-transform"
          />
          <p className="text-white text-[17px] font-semibold cursor-pointer tracking-wide">
            Bilel Lefi
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title
                    ? "text-white bg-white/10"
                    : "text-secondary hover:text-white"
                } text-[15px] font-medium cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 glass absolute top-16 right-4 min-w-[180px] z-10 rounded-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-3 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="w-full"
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-[15px] block py-2 px-3 rounded-lg hover:bg-white/5 transition-colors`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
