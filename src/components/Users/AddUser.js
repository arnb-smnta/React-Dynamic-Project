import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUSer.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, seterror] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredusername = nameInputRef.current.value;
    const entereduserage = ageInputRef.current.value;
    if (enteredusername.trim().length === 0) {
      seterror({
        title: "Username is Empty",
        message: "enter a valid username",
      });
      return;
    }

    if (+entereduserage < 1) {
      seterror({
        title: "age is invalid",
        message: "enter a valid age greater than 0",
      });
      return;
    }
    props.onAddUser(enteredusername, entereduserage);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    seterror(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          warning={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
