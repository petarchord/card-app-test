import React from "react";
import styles from "./Cards.module.scss";
import Card from "../Card/Card";

const Cards = () => {
  const renderAvailableCard = () => {
    if (localStorage.getItem("cardData")) {
      const {
        cardType,
        userName,
        firstDigits,
        secondDigits,
        thirdDigits,
        fourthDigits,
        expDate,
      } = JSON.parse(localStorage.getItem("cardData"));
      return (
        <Card
          cardType={cardType}
          userName={userName}
          firstDigits={firstDigits}
          secondDigits={secondDigits}
          thirdDigits={thirdDigits}
          fourthDigits={fourthDigits}
          expDate={expDate}
        />
      );
    }
  };
  return (
    <div className={styles.container}>
      <h3>My Cards</h3>
      {renderAvailableCard()}
      {renderAvailableCard() ? (
        ""
      ) : (
        <div className={styles.add_card}>
          <p>+</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
