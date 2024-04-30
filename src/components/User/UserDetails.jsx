import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";

const UserDetails = () => {
  const { user } = useAuth();
  const myPic = "https://i.postimg.cc/fRvXxvbd/IMG-1716.jpg";

  return (
    <Card className="max-w-96 rounded p-2 border border-gray-800 dark:border-gray-200 bg-gray-200 dark:bg-gray-800">
      <CardHeader floated={false} className=" rounded-full max-h-80">
        <img
          className="size-full object-cover opacity-85"
          src={user?.photoURL || myPic}
          alt={user?.displayName || "Anonymous"}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 text-gray-800 dark:text-gray-200"
        >
          Name: {user?.displayName || "Anonymous"}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-medium text-gray-800 dark:text-gray-200"
          textGradient
        >
          Email: {user?.email || "Not Given"}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default UserDetails;
