import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "../src/components/Users/UsersList";
function App() {
  const [usersList, setusersList] = useState([]);
  const addUserHandler = (uname, uage) => {
    setusersList((prevstate) => {
      return [
        ...prevstate,
        { id: Math.random().toString(), name: uname, age: uage },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
