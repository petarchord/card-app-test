import React from "react";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.container}>
      <h3>My Cards</h3>
      <div className={styles.add_card}>
        <p>+</p>
      </div>
    </div>
  );
};

export default Cards;
