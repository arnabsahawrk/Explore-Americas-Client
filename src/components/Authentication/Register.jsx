import { Card, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const { user, setUser, createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [displayPass, setDisplayPass] = useState(false);

  //Register
  const handleRegister = (data) => {
    const { name, photoURL, email, password } = data;

    //Create
    createUser(email, password)
      .then(() => {
        toast.success("Successfully Registered.", {
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
        //Update Profile
        updateUserProfile(name, photoURL).then(() => {
          setUser((prevUser) => ({
            ...prevUser,
            displayName: name,
            photoURL: photoURL,
          }));
        });

        navigate("/");
      })
      .catch(() => {
        toast.error("Registered Denied.", {
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

    reset();
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-gray-800 dark:text-gray-200 font-lato"
          >
            Register
          </Typography>
          <Typography
            as="div"
            className="font-lato text-gray-800 dark:text-gray-200 text-base font-medium mt-2"
          >
            <Fade delay={1e3} cascade damping={1e-1}>
              Nice to meet you! Enter your details to register.
            </Fade>
          </Typography>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-3">
              {/* Name */}
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 text-gray-800 dark:text-gray-200 font-lato"
                >
                  Your Name
                </Typography>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required.",
                    },
                    minLength: {
                      value: 4,
                      message: "Name must be at least 4 characters.",
                    },
                    maxLength: {
                      value: 16,
                      message: "Name must be in 16 characters.",
                    },
                  })}
                  name="name"
                  type="text"
                  size="lg"
                  placeholder="Enter Your Name"
                  className="border border-gray-800 dark:border-gray-200 focus:outline-[#F91842] rounded p-3 w-full bg-gray-200 dark:bg-gray-800"
                />
                {errors.name && (
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="text-[#F91842]"
                  >
                    {errors.name?.message}
                  </Typography>
                )}
              </div>
              {/* PhotoURL  */}
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 text-gray-800 dark:text-gray-200 font-lato"
                >
                  Your PhotoURL
                </Typography>
                <input
                  {...register("photoURL")}
                  name="photoURL"
                  type="url"
                  size="lg"
                  placeholder="Enter Your PhotoURL"
                  className="border border-gray-800 dark:border-gray-200 focus:outline-[#F91842] rounded p-3 w-full bg-gray-200 dark:bg-gray-800"
                />
              </div>
              {/* Email  */}
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 text-gray-800 dark:text-gray-200 font-lato"
                >
                  Your Email
                </Typography>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required.",
                    },
                  })}
                  name="email"
                  size="lg"
                  type="email"
                  placeholder="Enter Your Email"
                  className=" border border-gray-800 dark:border-gray-200 focus:outline-[#F91842] rounded p-3 w-full bg-gray-200 dark:bg-gray-800"
                />
                {errors.email && (
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="text-[#F91842]"
                  >
                    {errors.email?.message}
                  </Typography>
                )}
              </div>
              {/* Password  */}
              <div>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 text-gray-800 dark:text-gray-200 font-lato"
                >
                  Password
                </Typography>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required.",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])/,
                        message:
                          "Password must contain 1 upper & lower case letter.",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters.",
                      },
                      maxLength: {
                        value: 16,
                        message: "Password must be in 16 characters.",
                      },
                    })}
                    name="password"
                    type={displayPass ? "text" : "password"}
                    size="lg"
                    placeholder="Choose A Password"
                    className=" border border-gray-800 dark:border-gray-200 focus:outline-[#F91842] rounded p-3 w-full bg-gray-200 dark:bg-gray-800"
                  />

                  <span
                    className="absolute top-3.5 right-2 text-xl"
                    onClick={() => setDisplayPass(!displayPass)}
                  >
                    {displayPass ? (
                      <FaEye className="text-gray-800 dark:text-gray-200" />
                    ) : (
                      <FaEyeSlash className="text-gray-800 dark:text-gray-200" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="text-[#F91842]"
                  >
                    {errors.password?.message}
                  </Typography>
                )}
              </div>
            </div>
            {/* Checkbox  */}
            <div>
              <Checkbox
                {...register("checkbox", {
                  required: {
                    value: true,
                    message: "Agree to proceed.",
                  },
                })}
                name="checkbox"
                className="checked:bg-gray-200 checked:dark:bg-gray-800"
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal text-gray-800 dark:text-gray-200"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-[#F91842]"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              {errors.checkbox && (
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="text-[#F91842"
                >
                  {errors.checkbox?.message}
                </Typography>
              )}
            </div>
            <Button type="submit" className="mt-6 bg-[#F91842]" fullWidth>
              Register
            </Button>
            {user ? null : (
              <Typography
                color="gray"
                className="mt-4 text-center font-normal text-gray-800 dark:text-gray-200"
              >
                Already have an account?{" "}
                <Link to="/logIn" className="font-bold text-[#F91842]">
                  Log In
                </Link>
              </Typography>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Register;
