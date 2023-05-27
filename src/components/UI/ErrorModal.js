import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={styles.content}>{props.warning}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
