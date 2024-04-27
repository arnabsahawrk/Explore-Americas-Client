import { Typography } from "@material-tailwind/react";
import Nav from "../common/Nav/Nav";
import { IoIosArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";

const AddedListBanner = () => {
  return (
    <header className="relative">
      {/* Nav */}
      <Nav />
      {/* Banner  */}
      <section
        style={{
          backgroundImage: `url('https://i.postimg.cc/HkCnn9qh/2149153256.jpg')`,
        }}
        className="bg-cover bg-center bg-no-repeat h-[400px]"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 z-10  overflow-hidden bg-gray-800 bg-opacity-10 dark:bg-opacity-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <div className="container mx-auto flex flex-col justify-center items-center gap-3 h-full">
              <ul className="flex gap-2">
                <Typography
                  as="li"
                  variant="lead"
                  color="blue-gray"
                  className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato"
                >
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      `${isActive ? "text-[#F91842]" : ""} ${
                        isPending ? "text-[#FFCC00]" : ""
                      } flex items-center gap-1`
                    }
                  >
                    Home <IoIosArrowDropright />
                  </NavLink>
                </Typography>
                <Typography
                  as="li"
                  variant="lead"
                  color="blue-gray"
                  className="font-bold hover:text-[#F91842] dark:hover:text-[#F91842] dark:text-gray-200 text-gray-800 font-lato"
                >
                  <NavLink
                    to="/addedList"
                    className={({ isActive, isPending }) =>
                      `${isActive ? "text-[#F91842]" : ""} ${
                        isPending ? "text-[#FFCC00]" : ""
                      } flex items-center gap-1`
                    }
                  >
                    Added List <IoIosArrowDropright />
                  </NavLink>
                </Typography>
              </ul>
              <Typography
                as="h2"
                className="font-lato text-gray-800 dark:text-gray-200 text-2xl md:text-3xl font-extrabold"
              >
                Added List
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default AddedListBanner;
