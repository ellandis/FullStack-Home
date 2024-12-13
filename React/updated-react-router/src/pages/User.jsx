import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const User = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div className="userWrapper">
      {users?.data?.map((user, index) => (
        <Card user={user} key={index} />
      ))}
    </div>
  );
};

// export const loader = async () => {
//   const users = await getAllUser();
//   return users;
// };

export default User;
