import { Card, Button, Typography, IconButton } from "@material-tailwind/react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Fade } from "react-awesome-reveal";

const LogIn = () => {
  const { logInWithMedium, logInUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [displayPass, setDisplayPass] = useState(false);

  //Log In
  const handleLogIn = (data) => {
    const { email, password } = data;

    logInUser(email, password)
      .then(() => {
        toast.success("Log In Successfully.", {
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
        navigate(location?.state || "/");
      })
      .catch(() => {
        toast.error("Invalid User.", {
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

  //Google
  const googleUser = () => {
    logInWithMedium("google")
      .then(() => {
        toast.success("Authenticate Successfully.", {
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
        navigate(location?.state || "/");
      })
      .catch(() => {
        toast.error("Failed To Authenticate.", {
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

  //Github
  const githubUser = () => {
    logInWithMedium("github")
      .then(() => {
        toast.success("Authenticate Successfully.", {
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
        navigate(location?.state || "/");
      })
      .catch(() => {
        toast.error("Failed To Authenticate.", {
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
    <section className="bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10 flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography
            variant="h4"
            className="text-gray-800 dark:text-gray-200 font-lato"
          >
            Log In
          </Typography>
          <Typography
            as="div"
            className="font-lato text-gray-800 dark:text-gray-200 text-base font-medium mt-2"
          >
            <Fade delay={1e3} cascade damping={1e-1}>
              Access exclusive features securely.
            </Fade>
          </Typography>
          <form
            onSubmit={handleSubmit(handleLogIn)}
            className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-3">
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
                  className="border border-gray-800 dark:border-gray-200 focus:outline-[#F91842] rounded p-3 w-full bg-gray-200 dark:bg-gray-800"
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
                        value: /^(?=.*[A-Z])(?=.*[a-z]).{6,16}$/,
                        message: "Invalid password.",
                      },
                    })}
                    name="password"
                    type={displayPass ? "text" : "password"}
                    size="lg"
                    placeholder="Choose A Password"
                    className="border border-gray-800 dark:border-gray-200 focus:outline-[#F91842] rounded p-3 w-full bg-gray-200 dark:bg-gray-800"
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
            <Button type="submit" className="mt-6 bg-[#F91842]" fullWidth>
              log in
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal text-gray-800 dark:text-gray-200"
            >
              Not have an account yet?{" "}
              <Link to="/register" className="font-bold text-[#F91842]">
                Register
              </Link>
            </Typography>
          </form>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-[2px] my-5 bg-gray-800 dark:bg-gray-200 border-0" />
            <span className="absolute px-3 font-medium text-gray-800 dark:text-gray-200 -translate-x-1/2 bg-gray-200 dark:bg-gray-800 left-1/2 text-lg">
              or
            </span>
          </div>

          <div className="flex gap-4 mx-auto">
            <IconButton
              onClick={googleUser}
              className="rounded bg-[#DB4437] text-lg"
            >
              <FaGoogle />
            </IconButton>
            <IconButton
              onClick={githubUser}
              className="rounded bg-[#333333] text-lg"
            >
              <FaGithub />
            </IconButton>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LogIn;
