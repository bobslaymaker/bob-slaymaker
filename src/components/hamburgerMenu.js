import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldHideMenu, setShouldHideMenu] = useState(false);
  const mainDivRef = useRef(null);
  const router = useRouter();

  // List of paths where the menu should be hidden
  const urlList = [
    "/",
  ];

  useEffect(() => {
    // Check if the current path matches one in the URL list
    if (urlList.includes(router.pathname)) {
      setShouldHideMenu(true);
    } else {
      setShouldHideMenu(false);
    }
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
      // Focus the main div when menu opens
      setTimeout(() => {
        mainDivRef.current?.focus();
      }, 100);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  // If the current path matches, don't render the button
  if (shouldHideMenu) {
    return null;
  }

  const setIsOpenFalse = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <div className="relative top-0">
      {/* Hamburger Button */}
      <div>
        <div className="flex justify-center items-center shadow-md lg:shadow-none w-full z-[51] relative h-16 bg-white dark:bg-dark-bg transition-colors duration-200">
          <button
            className="md:p-4 p-1 focus:outline-none bg-white dark:bg-dark-bg transition-colors duration-200 absolute md:left-5 left-1 lg:hidden block"
            onClick={toggleMenu}
          >
            {!isOpen ? (
              <Menu size={24} className="text-gray-900 dark:text-dark-text" />
            ) : (
              <X size={24} className="text-gray-900 dark:text-dark-text" />
            )}
          </button>
          <div>
            <h1 className="text-[25px] goudy leading-relaxed tracking-wider py-2 uppercase text-gray-900 dark:text-dark-text">
              Bob Slaymaker
            </h1>
          </div>
          <div></div>
        </div>
        <div className="border-t-[2px] border-[#dddddd] dark:border-gray-700 shadow-md lg:flex hidden justify-center items-center bg-white dark:bg-dark-bg transition-colors duration-200">
          <div className="goudy flex justify-center items-center py-3 gap-10">
            <Link href="/shortscriptlist" className="hover:underline text-gray-900 dark:text-dark-text">
              Short Scripts
            </Link>
            <Link href="/shortstorieslist" className="hover:underline text-gray-900 dark:text-dark-text">
              Short Stories
            </Link>
            <Link href="/poemlist" className="hover:underline text-gray-900 dark:text-dark-text">
              Poems
            </Link>
            <Link href="/LatestFilm" className="hover:underline text-gray-900 dark:text-dark-text">
              Latest Film
            </Link>
            <Link href="/cv" className="hover:underline text-gray-900 dark:text-dark-text">
              CV
            </Link>
            <Link href="/" className="hover:underline text-gray-900 dark:text-dark-text">
              Home
            </Link>
            <Link href="/ContactInfo" className="hover:underline text-gray-900 dark:text-dark-text">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        tabIndex={-1}
        className={`fixed top-0 goudy left-0 shadow-2xl h-screen overflow-auto bg-white dark:bg-dark-bg transition-colors duration-200 ease-in-out z-[50] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-full uppercase font-normal`}
      >
        <div className="flex flex-col justify-center h-full text-center pt-20 overflow-hidden">
          <div ref={mainDivRef} className="flex flex-col items-start gap-7 h-full text-[16px] px-10 pt-6 overflow-y-scroll mb-5 focus:outline-none">
            <Link onClick={() => setIsOpenFalse()} href="/shortscriptlist" className="hover:underline text-gray-900 dark:text-dark-text">
              Short Scripts
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/shortstorieslist" className="hover:underline text-gray-900 dark:text-dark-text">
              Short Stories
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/cv" className="hover:underline text-gray-900 dark:text-dark-text">
              CV
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/poemlist" className="hover:underline text-gray-900 dark:text-dark-text">
              Poems
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/LatestFilm" className="hover:underline text-gray-900 dark:text-dark-text">
              Latest Film
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/" className="hover:underline text-gray-900 dark:text-dark-text">
              Home
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/ContactInfo" className="hover:underline text-gray-900 dark:text-dark-text">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

