import React from "react";
import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import { useHistory } from "react-router-dom";

const Cards = () => {
  const history = useHistory();
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
        <div>
          <Card
            cardType={cardType}
            userName={userName}
            firstDigits={firstDigits}
            secondDigits={secondDigits}
            thirdDigits={thirdDigits}
            fourthDigits={fourthDigits}
            expDate={expDate}
          />
          <button
            onClick={() => {
              const id =
                firstDigits + secondDigits + thirdDigits + fourthDigits;
              history.push(`/cards/${id}/edit`);
            }}
          >
            Edit current card
          </button>
        </div>
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
        <div
          className={styles.add_card}
          onClick={() => {
            history.push("/cards/add");
          }}
        >
          <p>+</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
