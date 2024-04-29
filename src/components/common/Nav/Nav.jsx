import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

//Theme Switcher
function ThemeSwitcher() {
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
  );
}

//User Log In Handling
function ProfileMenu() {
  //Auth
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const myPic = "https://i.postimg.cc/fRvXxvbd/IMG-1716.jpg";

  //Lot Out
  const logOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Log Out Successfully.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });

        navigate("/");
      })
      .catch(() => {
        toast.error("Failed, Try Again.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
      });
  };
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer opacity-85 dark:opacity-70"
          src={user?.photoURL || myPic}
        />
      </MenuHandler>
      <MenuList className="bg-gray-200 dark:bg-gray-800 bg-opacity-25 dark:bg-opacity-50 border-none">
        <MenuItem className="hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0">
          <Typography
            variant="lead"
            className="font-bold dark:text-gray-200 text-gray-800 font-lato text-center w-full"
          >
            {user?.displayName || "Anonymous"}
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/updateProfile")}
          className="flex items-center gap-2 hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.48999 1.17C9.10999 -0.39 6.88999 -0.39 6.50999 1.17C6.45326 1.40442 6.34198 1.62213 6.18522 1.80541C6.02845 1.9887 5.83063 2.13238 5.60784 2.22477C5.38505 2.31716 5.1436 2.35564 4.90313 2.33709C4.66266 2.31854 4.42997 2.24347 4.22399 2.118C2.85199 1.282 1.28199 2.852 2.11799 4.224C2.65799 5.11 2.17899 6.266 1.17099 6.511C-0.390006 6.89 -0.390006 9.111 1.17099 9.489C1.40547 9.54581 1.62322 9.65719 1.80651 9.81407C1.98979 9.97096 2.13343 10.1689 2.22573 10.3918C2.31803 10.6147 2.35639 10.8563 2.33766 11.0968C2.31894 11.3373 2.24367 11.5701 2.11799 11.776C1.28199 13.148 2.85199 14.718 4.22399 13.882C4.42993 13.7563 4.66265 13.6811 4.90318 13.6623C5.14371 13.6436 5.38527 13.682 5.60817 13.7743C5.83108 13.8666 6.02904 14.0102 6.18592 14.1935C6.34281 14.3768 6.45419 14.5945 6.51099 14.829C6.88999 16.39 9.11099 16.39 9.48899 14.829C9.54599 14.5946 9.65748 14.377 9.8144 14.1939C9.97132 14.0107 10.1692 13.8672 10.3921 13.7749C10.6149 13.6826 10.8564 13.6442 11.0969 13.6628C11.3373 13.6815 11.57 13.7565 11.776 13.882C13.148 14.718 14.718 13.148 13.882 11.776C13.7565 11.57 13.6815 11.3373 13.6628 11.0969C13.6442 10.8564 13.6826 10.6149 13.7749 10.3921C13.8672 10.1692 14.0107 9.97133 14.1939 9.81441C14.377 9.65749 14.5946 9.546 14.829 9.489C16.39 9.11 16.39 6.889 14.829 6.511C14.5945 6.45419 14.3768 6.34281 14.1935 6.18593C14.0102 6.02904 13.8666 5.83109 13.7743 5.60818C13.682 5.38527 13.6436 5.14372 13.6623 4.90318C13.681 4.66265 13.7563 4.42994 13.882 4.224C14.718 2.852 13.148 1.282 11.776 2.118C11.5701 2.24368 11.3373 2.31895 11.0968 2.33767C10.8563 2.35639 10.6147 2.31804 10.3918 2.22574C10.1689 2.13344 9.97095 1.9898 9.81407 1.80651C9.65718 1.62323 9.5458 1.40548 9.48899 1.171L9.48999 1.17ZM7.99999 11C8.79564 11 9.55871 10.6839 10.1213 10.1213C10.6839 9.55871 11 8.79565 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79564 5 7.99999 5C7.20434 5 6.44128 5.31607 5.87867 5.87868C5.31606 6.44129 4.99999 7.20435 4.99999 8C4.99999 8.79565 5.31606 9.55871 5.87867 10.1213C6.44128 10.6839 7.20434 11 7.99999 11Z"
              fill="#F91842"
            />
          </svg>

          <Typography
            variant="paragraph"
            className="font-medium dark:text-gray-200 text-gray-800 font-lato hover:text-[#F91842] dark:hover:text-[#F91842]"
          >
            Edit Profile
          </Typography>
        </MenuItem>
        <hr className="my-2 border-gray-800 dark:border-gray-200" />
        <MenuItem
          onClick={() => logOut()}
          className="flex items-center gap-2 hover:bg-none hover:bg-opacity-0 focus:bg-none focus:bg-opacity-0 active:bg-none active:bg-opacity-0"
        >
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
              fill="#F91842"
            />
          </svg>
          <Typography
            variant="paragraph"
            className="font-medium dark:text-gray-200 text-gray-800 font-lato hover:text-[#F91842] dark:hover:text-[#F91842]"
          >
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

//Nav List
function NavList() {
  const { user } = useAuth();

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

      <div className="lg:hidden grid space-y-2">
        {user ? (
          <div className="duration-100 flex justify-center items-center gap-2">
            <ProfileMenu />
          </div>
        ) : (
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
        )}
        {/* Theme Switcher  */}
        <ThemeSwitcher />
      </div>
    </ul>
  );
}

//Nav Bar
const Nav = () => {
  const { user } = useAuth();

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
          {/* Conditional Rendering User Profile or Log In  */}
          {user ? (
            <ProfileMenu />
          ) : (
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
          )}
          {/* Theme Switcher  */}
          <ThemeSwitcher />
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Nav;
