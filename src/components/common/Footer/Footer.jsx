import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 py-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-200 dark:bg-gray-800 text-center lg:justify-between container mx-auto px-4 md:px-8 lg:px-16">
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
        <ul className="flex flex-wrap justify-center items-center gap-y-2 gap-x-8">
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
        </ul>
      </div>
      <hr className="my-8 border-gray-800 dark:border-gray-200 container mx-auto px-4 md:px-8 lg:px-16" />
      <Typography className="text-center font-normal font-lato text-gray-800 dark:text-gray-200">
        &copy; 2024 Arnab Saha
      </Typography>
    </footer>
  );
}
