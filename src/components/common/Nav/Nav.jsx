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
    <ul className="my-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6 bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50 px-6 py-3 rounded">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#F91842]" : ""} ${
              isPending ? "text-[#FFCC00]" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato"
      >
        <NavLink
          to="/touristSpots"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#F91842]" : ""} ${
              isPending ? "text-[#FFCC00]" : ""
            }`
          }
        >
          Tourist Spots
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato"
      >
        <NavLink
          to="/addSpot"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#F91842]" : ""} ${
              isPending ? "text-[#FFCC00]" : ""
            }`
          }
        >
          Add Spot
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato"
      >
        <NavLink
          to="/addedSpot"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#F91842]" : ""} ${
              isPending ? "text-[#FFCC00]" : ""
            }`
          }
        >
          Added Spot
        </NavLink>
      </Typography>

      <div className="lg:hidden grid">
        {/* User Log In/Log Out  */}
        <div className="duration-100 flex justify-center items-center gap-2">
          <Typography
            as="button"
            variant="paragraph"
            color="blue-gray"
            className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato border border-[#F91842]  px-4 py-2 rounded"
          >
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-[#F91842]" : ""} ${
                  isPending ? "text-[#FFCC00]" : ""
                }`
              }
            >
              Log In
            </NavLink>
          </Typography>
          <Typography
            as="button"
            variant="paragraph"
            color="blue-gray"
            className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato border border-[#F91842]  px-4 py-2 rounded"
          >
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-[#F91842]" : ""} ${
                  isPending ? "text-[#FFCC00]" : ""
                }`
              }
            >
              Register
            </NavLink>
          </Typography>
        </div>
        {/* Theme Switcher  */}
        <div className="duration-100 rounded flex justify-center items-center gap-1 p-1 text-gray-800 dark:text-gray-200">
          {options?.map((opt) => (
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`size-8 leading-9 text-xl rounded-full hover:text-[#F91842] dark:hover:text-[#F91842] ${
                theme === opt.text && "text-[#F91842]"
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
    <Navbar className="block w-full px-8 shadow-none py-4 bg-none absolute z-50 backdrop-filter-none backdrop-blur-none bg-opacity-0 border-none rounded-none max-w-full duration-100 bg-transparent">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <Typography
            as="h1"
            className="flex items-center gap-2 font-lato mr-4 cursor-pointer text-gray-800 dark:text-gray-200 text-xl md:text-2xl font-extrabold"
          >
            <img
              src="https://i.postimg.cc/t7QppPTG/logo.png"
              alt="Logo"
              className="size-12 lg:size-16"
            />{" "}
            Explore <span className="text-[#F91842]">Americas</span>
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
            <XMarkIcon className="size-7 text-[#F91842]" strokeWidth={2} />
          ) : (
            <Bars3Icon
              className="size-7 rounded text-gray-800 dark:text-gray-200"
              strokeWidth={2}
            />
          )}
        </IconButton>
        <div className="hidden lg:flex items-center gap-2">
          {/* User Log In/Log Out  */}
          <div className="duration-100 flex justify-center items-center gap-2">
            <Typography
              as="button"
              variant="paragraph"
              color="blue-gray"
              className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50 px-6 py-3 rounded"
            >
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-[#F91842]" : ""} ${
                    isPending ? "text-[#FFCC00]" : ""
                  }`
                }
              >
                Log In
              </NavLink>
            </Typography>
            {/* <Typography
              as="button"
              variant="paragraph"
              color="blue-gray"
              className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50 px-6 py-3 rounded"
            >
              <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                  `${isActive ? "text-[#F91842]" : ""} ${
                    isPending ? "text-[#FFCC00]" : ""
                  }`
                }
              >
                Register
              </NavLink>
            </Typography> */}
          </div>
          {/* Theme Switcher  */}
          <div className="duration-100 flex justify-center items-center gap-1 bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50 px-6 py-2 rounded text-gray-800 dark:text-gray-200">
            {options?.map((opt) => (
              <button
                key={opt.text}
                onClick={() => setTheme(opt.text)}
                className={`size-8 leading-9 text-xl rounded-full hover:text-[#F91842] dark:hover:text-[#F91842] ${
                  theme === opt.text && "text-[#F91842]"
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
