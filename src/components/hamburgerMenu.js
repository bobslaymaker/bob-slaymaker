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
      <div className="flex justify-between items-center w-full shadow-md z-50">
        <button
          className="p-4 z-50 focus:outline-none bg-white"
          onClick={toggleMenu}
        >
          {!isOpen ? <Menu size={24} /> : <X size={24} />}
        </button>
        <div><h1 className="text-[24px] goudy uppercase">Bob Slaymaker</h1></div>
        <div></div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 goudy left-0 shadow-2xl h-screen bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:w-[20%] w-full uppercase font-normal`}
      >
        <div className="flex flex-col justify-center h-full text-center">
          <div className="flex flex-col items-center justify-center h-full space-y-4 lg:text-[10px] md:text-[10px] text-[10px]">
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