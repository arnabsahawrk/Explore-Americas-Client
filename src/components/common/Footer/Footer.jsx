import { Typography } from "@material-tailwind/react";
import { BsSendFill, BsTwitterX } from "react-icons/bs";
import { FaMap, FaPhoneAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 py-8 border-t border-gray-800 dark:border-gray-200">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-200 dark:bg-gray-800 text-center lg:justify-between container mx-auto px-4 md:px-8 lg:px-16">
        <div>
          <Link to="/">
            <Typography
              as="h1"
              className="flex justify-center lg:justify-normal items-center gap-2 font-lato mr-4 cursor-pointer text-gray-800 dark:text-gray-200 text-xl md:text-2xl font-extrabold"
            >
              <img
                src="https://i.postimg.cc/t7QppPTG/logo.png"
                alt="Logo"
                className="size-12 lg:size-16"
              />{" "}
              Explore <span className="text-[#F91842]">Americas</span>
            </Typography>
          </Link>
          <Typography
            as="p"
            className="font-lato text-gray-800 dark:text-gray-200 text-xs max-w-[310px] text-center lg:text-justify"
          >
            Discover the Americas with us. Explore stunning landscapes, vibrant
            cultures, and unforgettable experiences across North, Central, and
            South America.
          </Typography>
          <ul className="flex items-center gap-4 mt-4 lg:ml-3 text-2xl *:bg-[#F91842] *:p-2 *:rounded-full text-gray-200 justify-center lg:justify-normal">
            <li>
              <a href="https://www.facebook.com/arnabsahawrk/" target="_blank">
                <SlSocialFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/arnabsahawrk/" target="_blank">
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arnabsahawrk/"
                target="_blank"
              >
                <RiLinkedinLine />
              </a>
            </li>
            <li>
              <a href="https://github.com/arnabsahawrk/" target="_blank">
                <LuGithub />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Typography
            as="h2"
            className="mb-1.5 text-gray-800 dark:text-gray-200 text-center text-lg font-extrabold"
          >
            Quick Links
          </Typography>
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
        <div>
          <Typography
            as="h2"
            className="mb-1.5 text-gray-800 dark:text-gray-200 text-lg font-extrabold"
          >
            Have a questions?
          </Typography>

          <ul className="space-y-3 text-gray-800 dark:text-gray-200">
            <li className="flex gap-2 items-center">
              <FaMap className="text-[#F91842]" />
              <span className="text-xs">
                Level-4, 34, Awal Centre, Banani, Dhaka
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt className="text-[#F91842]" />
              <span className="text-xs">01322901105</span>
            </li>
            <li className="flex gap-2 items-center">
              <BsSendFill className="text-[#F91842]" />
              <span className="text-xs">web@programming-hero.com</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-800 dark:border-gray-200 container mx-auto px-4 md:px-8 lg:px-16" />
      <Typography className="text-center font-normal font-lato text-gray-800 dark:text-gray-200">
        &copy; 2024 Arnab Saha
      </Typography>
    </footer>
  );
}
