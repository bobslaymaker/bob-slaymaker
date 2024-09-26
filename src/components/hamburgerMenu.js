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
  };

  // If the current path matches, don't render the button
  if (shouldHideMenu) {
    return null;
  }

  return (
    <div className="">
      {/* Hamburger Button */}
      <div>
        <div className="flex justify-center items-center shadow-md lg:shadow-none w-full z-50 relative h-16">
          <button
            className="md:p-4 p-1 z-50 focus:outline-none bg-white absolute md:left-5 left-1 lg:hidden block"
            onClick={toggleMenu}
          >
            {!isOpen ? <Menu size={24} /> : <X size={24} />}
          </button>
          <div><h1 className="text-[25px] md:text-[3vw] lg:text-[30px] 2xl:text-[2vw] goudy leading-relaxed tracking-wider py-2 uppercase">Bob Slaymaker</h1></div>
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
            <Link href="/myLastFilm" className="hover:underline">
              My Last Film
            </Link>
            <Link href="/cv" className="hover:underline">
              CV
            </Link>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/ContactInfo" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 goudy left-0 shadow-2xl h-screen bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } w-full uppercase font-normal`}
      >
        <div className="flex flex-col justify-center h-full text-center pt-20">
          <div className="flex flex-col items-start justify-between h-full text-[25px] md:text-[3vw] lg:text-[30px] 2xl:text-[2vw] px-16 pb-5">
            <Link href="/shortscriptlist" className="hover:underline">
              Short Scripts
            </Link>
            <Link href="/shortstorieslist" className="hover:underline">
              Short Stories
            </Link>
            <Link href="/cv" className="hover:underline">
              CV
            </Link>
            <Link href="/poemlist" className="hover:underline">
              Poems
            </Link>
            <Link href="/myLastFilm" className="hover:underline">
              Last Film
            </Link>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/ContactInfo" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;