import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavList() {
  //-----------------Theme------------------
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //Theme Icon
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  //Set default window theme
  const onWindowMatch = useCallback(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery, element]);
  onWindowMatch();

  //Set the theme according to the setting
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
        break;
      default:
        window.localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme, element, onWindowMatch]);

  // Trigger when system theme change
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  // -------------------------------------

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold hover:text-[#06112A] dark:text-gray-100 text-[#848093]"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#06112A] dark:text-gray-100" : ""} ${
              isPending ? "text-red-700" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>

      <div className="lg:hidden grid">
        {/* Theme Switcher  */}
        <div className="duration-100 dark:bg-blue-gray-700 bg-gray-700 rounded">
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`size-8 leading-9 text-xl rounded-full m-1 ${
                theme === opt.text && "text-cyan-600"
              }`}
            >
              <ion-icon name={opt.icon}></ion-icon>
            </button>
          ))}
        </div>
      </div>
    </ul>
  );
}

const Nav = () => {
  //-----------------Theme------------------
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme")
      ? window.localStorage.getItem("theme")
      : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //Theme Icon
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];
  //Set default window theme
  const onWindowMatch = useCallback(() => {
    if (
      window.localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [darkQuery, element]);
  onWindowMatch();

  //Set the theme according to the setting
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
        break;
      default:
        window.localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme, element, onWindowMatch]);

  // Trigger when system theme change
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  // -------------------------------------

  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="shadow-none py-2 bg-white dark:bg-blue-gray-800 backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 border-none rounded-none max-w-full duration-100">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <Typography
            as="h1"
            className="mr-4 cursor-pointer py-1.5 text-[#06112A] dark:text-gray-100 text-xl md:text-2xl font-extrabold"
          >
            Explore <span>Americas</span>
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto size-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="size-7 text-[#06112A]" strokeWidth={2} />
          ) : (
            <Bars3Icon
              className="size-7 bg-[#5EA51D] rounded"
              strokeWidth={2}
            />
          )}
        </IconButton>
        <div className="hidden lg:grid">
          {/* Theme Switcher  */}
          <div className="duration-100 dark:bg-blue-gray-700 bg-gray-700 rounded">
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`size-8 leading-9 text-xl rounded-full m-1 ${
                  theme === opt.text && "text-cyan-600"
                }`}
              >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
