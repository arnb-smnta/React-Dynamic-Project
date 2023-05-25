import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUSer.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [error, seterror] = useState();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredage, setenteredage] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
      seterror({
        title: "Username is Empty",
        message: "enter a valid username",
      });
      return;
    }

    if (+enteredage < 1 || enteredage.trim().length() === 0) {
      seterror({
        title: "age is invalid",
        message: "enter a valid age greater than 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredage);
    console.log(enteredage, enteredUsername);
    setEnteredUsername("");
    setenteredage("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const agechangeHandler = (event) => {
    setenteredage(event.target.value);
  };

  const errorHandler = () => {
    return null;
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} warning={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={enteredage}
            id="age"
            type="number"
            onChange={agechangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
