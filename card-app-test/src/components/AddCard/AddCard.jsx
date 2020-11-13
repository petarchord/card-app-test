import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import styles from "./AddCard.module.scss";

const AddCard = () => {
  const userNameRef = useRef();
  const firstDigitsRef = useRef();
  const secondDigitsRef = useRef();
  const thirdDigitsRef = useRef();
  const fourthDigitsRef = useRef();
  const expDateRef = useRef();

  const addCardSubmit = (e) => {
    e.preventDefault();
    const cardData = {
      cardType,
      userName,
      firstDigits,
      secondDigits,
      thirdDigits,
      fourthDigits,
      expDate,
    };

    localStorage.setItem("cardData", JSON.stringify(cardData));
  };

  const changeCardType = () => {
    if (cardType < 3) {
      setCardType(cardType + 1);
    } else {
      setCardType(0);
    }
  };

  const [cardType, setCardType] = useState(0); //0-visa 1-master 2-discover
  const [firstDigits, setFirstDigits] = useState("0000");
  const [secondDigits, setSecondDigits] = useState("0000");
  const [thirdDigits, setThirdDigits] = useState("0000");
  const [fourthDigits, setFourthDigits] = useState("0000");
  const [userName, setUserName] = useState("USER NAME");
  const [expDate, setExpDate] = useState("20/07");
  return (
    <div className={styles.container}>
      <h3>Add card to account</h3>
      <Card
        cardType={cardType}
        setCardType={setCardType}
        userName={userName}
        firstDigits={firstDigits}
        secondDigits={secondDigits}
        thirdDigits={thirdDigits}
        fourthDigits={fourthDigits}
        expDate={expDate}
        userNameRef={userNameRef}
        firstDigitsRef={firstDigitsRef}
        secondDigitsRef={secondDigitsRef}
        thirdDigitsRef={thirdDigitsRef}
        fourthDigitsRef={fourthDigitsRef}
        expDateRef={expDateRef}
      />

      <div>
        <form
          onSubmit={(e) => {
            addCardSubmit(e);
          }}
        >
          <div className={styles.input_holder}>
            <label htmlFor="name">Name</label>
            <input
              ref={userNameRef}
              type="text"
              name="name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
          </div>
          <div className={styles.input_holder}>
            <label htmlFor="Card Number">Card Number</label>
            <div className={styles.digits_input_holder}>
              <input
                ref={firstDigitsRef}
                type="text"
                name="first_digits"
                onChange={(e) => {
                  setFirstDigits(e.target.value);
                }}
                required
              />
              <input
                ref={secondDigitsRef}
                type="text"
                name="second_digits"
                onChange={(e) => {
                  setSecondDigits(e.target.value);
                }}
                required
              />
              <input
                ref={thirdDigitsRef}
                type="text"
                name="third_digits"
                onChange={(e) => {
                  setThirdDigits(e.target.value);
                }}
                required
              />
              <input
                ref={fourthDigitsRef}
                type="text"
                name="fourth_digits"
                onChange={(e) => {
                  setFourthDigits(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={styles.input_holder}>
            <label htmlFor="expiration date">Expires on</label>
            <input
              ref={expDateRef}
              type="text"
              onChange={(e) => {
                setExpDate(e.target.value);
              }}
              required
            />
          </div>

          <input type="submit" value="Save" id={styles.submit_btn} />
        </form>
      </div>
    </div>
  );
};

export default AddCard;
