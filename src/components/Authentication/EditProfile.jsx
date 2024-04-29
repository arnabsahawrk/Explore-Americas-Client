import { Card, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const EditProfile = () => {
  const { setUser, updateUserProfile } = useAuth();
  const [userInput, setUserInput] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  //Make Sure User Fill At Least One Input
  const userName = watch("name");
  const userPhoto = watch("photoURL");
  useEffect(() => {
    if (userName || userPhoto) setUserInput(false);
    else setUserInput(true);
  }, [userName, userPhoto]);

  //Update Profile
  const handleUpdate = (data) => {
    const { name, photoURL } = data;

    updateUserProfile(name, photoURL)
      .then(() => {
        toast.success("Your Profile Updated.", {
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

        setUser((prevUser) => ({
          ...prevUser,
          displayName: name || prevUser.displayName,
          photoURL: photoURL || prevUser.photoURL,
        }));
      })
      .catch(() => {
        toast.error("Failed to update, try again.", {
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
    <Card
      color="transparent"
      shadow={false}
      className="bg-gray-200 dark:bg-gray-800"
    >
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-gray-800 dark:text-gray-200"
      >
        Edit Your Profile
      </Typography>
      <form
        onSubmit={handleSubmit(handleUpdate)}
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
        </div>
        <Button
          disabled={userInput}
          type="submit"
          className="mt-6 bg-[#F91842]"
          fullWidth
        >
          Update
        </Button>
      </form>
    </Card>
  );
};

export default EditProfile;
