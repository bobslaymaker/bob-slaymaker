import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/router";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldHideMenu, setShouldHideMenu] = useState(false);
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
        <div className="flex justify-center items-center shadow-md lg:shadow-none w-full z-[51] relative h-16">
          <button
            className="md:p-4 p-1 focus:outline-none bg-white absolute md:left-5 left-1 lg:hidden block"
            onClick={toggleMenu}
          >
            {!isOpen ? <Menu size={24} /> : <X size={24} />}
          </button>
          <div><h1 className="text-[25px]  goudy leading-relaxed tracking-wider py-2 uppercase">Bob Slaymaker</h1></div>
          <div></div>
        </div>
        <div className="border-t-[2px] border-[#dddddd] shadow-md lg:flex hidden justify-center items-center">
          <div className="goudy flex justify-center items-center py-3 gap-10">
            <Link href="/shortscriptlist" className="hover:underline">
              Short Scripts
            </Link>
            <Link href="/shortstorieslist" className="hover:underline">
              Short Stories
            </Link>
            <Link href="/poemlist" className="hover:underline">
              Poems
            </Link>
            <Link href="/LatestFilm" className="hover:underline">
              Latest Film
            </Link>
            <Link href="/cv" className="hover:underline">
              CV
            </Link>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/cv" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 goudy left-0 shadow-2xl h-screen overflow-auto bg-white transition-transform duration-300 ease-in-out z-[50] ${isOpen ? "translate-x-0" : "-translate-x-full"
          } w-full uppercase font-normal`}
      >
        <div className="flex flex-col justify-center h-full text-center pt-20 overflow-hidden">
          <div className="flex flex-col items-start gap-10 h-full text-[16px] px-10 pt-10 overflow-y-scroll mb-5">
            <Link onClick={() => setIsOpenFalse()} href="/shortscriptlist" className="hover:underline">
              Short Scripts
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/shortstorieslist" className="hover:underline">
              Short Stories
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/cv" className="hover:underline">
              CV
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/poemlist" className="hover:underline">
              Poems
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/LatestFilm" className="hover:underline">
              Latest Film
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/" className="hover:underline">
              Home
            </Link>
            <Link onClick={() => setIsOpenFalse()} href="/cv" className="hover:underline">
              Contact
            </Link>
            <div onClick={() => { }} className="hover:underline">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

