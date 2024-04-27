import { Typography } from "@material-tailwind/react";
import Nav from "../common/Nav/Nav";
import { IoIosArrowDropright } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const LoginBanner = () => {
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
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 z-10  overflow-hidden bg-gray-600 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50">
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
                    to="/logIn"
                    className={({ isActive, isPending }) =>
                      `${isActive ? "text-[#F91842]" : ""} ${
                        isPending ? "text-[#FFCC00]" : ""
                      } flex items-center gap-1`
                    }
                  >
                    Log In <IoIosArrowDropright />
                  </NavLink>
                </Typography>
              </ul>
              <Slide>
                <Typography
                  as="p"
                  className="font-lato text-gray-800 dark:text-gray-200 text-xl font-extrabold md:hidden"
                >
                  Access exclusive features securely.
                </Typography>
              </Slide>

              <Typography
                as="p"
                className="font-lato text-gray-800 dark:text-gray-200 text-xl lg:text-2xl font-extrabold hidden md:grid"
              >
                <Fade delay={1e3} cascade damping={1e-1}>
                  Unlock access to exclusive features and personalized
                  recommendations.
                </Fade>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default LoginBanner;
