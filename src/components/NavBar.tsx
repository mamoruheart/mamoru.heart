"use client";

import { AiOutlineMenu, AiOutlineFontColors } from "react-icons/ai";
import { LuJapaneseYen } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animateScroll, Link } from "react-scroll";

function navLinks(theme: any, mounted: boolean) {
  return (
    <>
      <li className="scroll-link mt-4 sm:my-0 sm:mr-4">
        <Link
          to="about-me"
          smooth={true}
          offset={-160}
          duration={500}
          onClick={() => {
            const navbar = document.querySelector("#toggle-navbar");
            if (navbar) {
              navbar.classList.add("hidden");
            }
          }}
          className="group transition duration-300 hover:cursor-pointer"
        >
          {mounted && (theme === "light" ? "私について" : "About Me")}
          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
        </Link>
      </li>
      {/*  */}
      <li className="scroll-link sm:my-0 sm:mr-4">
        <Link
          to="education"
          smooth={true}
          offset={-200}
          duration={500}
          onClick={() => {
            const navbar = document.querySelector("#toggle-navbar");
            if (navbar) {
              navbar.classList.add("hidden");
            }
          }}
          className="group transition duration-300 hover:cursor-pointer"
        >
          {mounted && (theme === "light" ? "教育" : "Education")}
          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
        </Link>
      </li>
      {/*  */}
      <li className="scroll-link my-1 sm:my-0 sm:mr-4">
        <Link
          to="services"
          smooth={true}
          offset={-200}
          duration={500}
          onClick={() => {
            const navbar = document.querySelector("#toggle-navbar");
            if (navbar) {
              navbar.classList.add("hidden");
            }
          }}
          className="group transition duration-300 hover:cursor-pointer"
        >
          {mounted && (theme === "light" ? "サービス" : "Services")}
          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
        </Link>
      </li>
      {/*  */}
      <li className="scroll-link sm:my-0 sm:mr-4">
        <Link
          to="timeline"
          smooth={true}
          offset={-200}
          duration={500}
          onClick={() => {
            const navbar = document.querySelector("#toggle-navbar");
            if (navbar) {
              navbar.classList.add("hidden");
            }
          }}
          className="group transition duration-300 hover:cursor-pointer"
        >
          {mounted && (theme === "light" ? "タイムライン" : "Timeline")}
          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
        </Link>
      </li>
      {/*  */}
      <li className="scroll-link my-1 sm:my-0 sm:mr-4">
        <Link
          to="projects"
          smooth={true}
          offset={-120}
          duration={500}
          onClick={() => {
            const navbar = document.querySelector("#toggle-navbar");
            if (navbar) {
              navbar.classList.add("hidden");
            }
          }}
          className="group transition duration-300 hover:cursor-pointer"
        >
          {mounted && (theme === "light" ? "プロジェクト" : "Projects")}
          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
        </Link>
      </li>
      {/*  */}
      <li className="scroll-link my-1 sm:my-0 sm:mr-4">
        <button
          onClick={() => {
            animateScroll.scrollToBottom();
            const navbar = document.querySelector("#toggle-navbar");
            if (navbar) {
              navbar.classList.add("hidden");
            }
          }}
          className="group w-full transition duration-300 hover:cursor-pointer"
        >
          {mounted && (theme === "light" ? "コンタクト" : "Contact")}
          <span className="block h-[1px] max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
        </button>
      </li>
    </>
  );
}

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  //-- When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  //-- decrease navbar height on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const horizontalNavbar = document.querySelector("#horizontal-navbar");

      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("py-5");
          navbar.classList.remove("py-7");
        } else {
          navbar.classList.add("py-7");
          navbar.classList.remove("py-5");
        }
      }

      if (horizontalNavbar) {
        if (window.scrollY > 100) {
          horizontalNavbar.classList.add("py-5");
          horizontalNavbar.classList.remove("py-7");
        } else {
          horizontalNavbar.classList.add("py-7");
          horizontalNavbar.classList.remove("py-5");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="sticky top-0 z-10 w-full border-b-2 border-cyan-400 bg-cyan-100 px-8 py-7 text-gray-700 transition-all ease-in-out dark:border-0 dark:bg-gray-800 dark:text-white md:fixed"
        id="horizontal-navbar"
      >
        <div className="flex w-full items-center justify-between">
          <button onClick={() => animateScroll.scrollToTop()} className="group text-lg transition duration-300 sm:text-xl">
            {mounted && (theme === "light" ? "南出さんの個人サイト" : "MamoruHeart")}
            {!mounted && "Loading..."}
            <span className="block h-0.5 max-w-0 bg-gray-700 transition-all duration-500 group-hover:max-w-full dark:bg-white"></span>
          </button>
          <div className="flex">
            <AiOutlineMenu
              className="mr-4 block text-2xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-500 md:hidden"
              onClick={() => {
                const navbar = document.querySelector("#toggle-navbar");
                const horizontalNavbar = document.querySelector("#horizontal-navbar");

                if (navbar) {
                  navbar.classList.toggle("hidden");
                }

                if (horizontalNavbar) {
                  horizontalNavbar.classList.toggle("pb-8");
                  horizontalNavbar.classList.toggle("pb-4");
                }
              }}
            />
            <ul className="hidden flex-col items-center text-base md:flex md:flex-row">{navLinks(theme, mounted)}</ul>

            {
              //-- Only show dark mode toggle if mounted and can be toggled
              mounted && (
                <button className={`ml-2`}>
                  {theme === "light" ? (
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      whileTap={{
                        rotate: -90,
                        borderRadius: "100%"
                      }}
                    >
                      <AiOutlineFontColors
                        title="English"
                        className="cursor-pointer text-lg text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-500 sm:text-2xl"
                        onClick={() => setTheme("dark")}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      whileTap={{
                        rotate: -90,
                        borderRadius: "100%"
                      }}
                    >
                      <LuJapaneseYen title="日本語" className="cursor-pointer text-lg hover:text-cyan-600 dark:hover:text-cyan-500 sm:text-2xl" onClick={() => setTheme("light")} />
                    </motion.div>
                  )}
                </button>
              )
            }
          </div>
        </div>
        <div className={`flex w-full items-center justify-center`}>
          <ul id="toggle-navbar" className="hidden w-fit space-y-2 text-center text-sm">
            {navLinks(theme, mounted)}
          </ul>
        </div>
      </nav>
    </>
  );
}
