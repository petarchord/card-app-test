import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import styles from "./EditCard.module.scss";
import { useHistory } from "react-router-dom";

const EditCard = () => {
  const history = useHistory();
  const cardDataEdit = JSON.parse(localStorage.getItem("cardData"));
  const userNameRef = useRef();
  const firstDigitsRef = useRef();
  const secondDigitsRef = useRef();
  const thirdDigitsRef = useRef();
  const fourthDigitsRef = useRef();
  const expDateRef = useRef();

  const validateDigits = () => {
    const firstDigit = parseInt(firstDigits.split("")[0]);
    if (firstDigit === 4 || firstDigit === 5 || firstDigit === 6) {
      return true;
    } else {
      setCardNumberError(true);
      return false;
    }
  };

  const addCardSubmit = (e) => {
    e.preventDefault();
    if (!validateDigits()) return;
    const id = firstDigits + secondDigits + thirdDigits + fourthDigits;
    const cardData = {
      id,
      cardType,
      userName,
      firstDigits,
      secondDigits,
      thirdDigits,
      fourthDigits,
      expDate,
    };

    localStorage.setItem("cardData", JSON.stringify(cardData));
    history.push("/");
  };

  const [cardType, setCardType] = useState(cardDataEdit.cardType); //0-visa 1-master 2-discover
  const [cardNumberError, setCardNumberError] = useState(false);
  const [firstDigits, setFirstDigits] = useState(cardDataEdit.firstDigits);
  const [secondDigits, setSecondDigits] = useState(cardDataEdit.secondDigits);
  const [thirdDigits, setThirdDigits] = useState(cardDataEdit.thirdDigits);
  const [fourthDigits, setFourthDigits] = useState(cardDataEdit.fourthDigits);
  const [userName, setUserName] = useState(cardDataEdit.userName);
  const [expDate, setExpDate] = useState(cardDataEdit.expDate);
  return (
    <div className={styles.container}>
      <h3>Edit current card</h3>
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
            {cardNumberError ? <p>Wrong card number</p> : ""}
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
          <div className={styles.input_holder}>
            <label htmlFor="tpye of card">Select the type of card</label>
            <select
              name="card_type"
              onChange={(e) => {
                setCardType(e.target.value);
              }}
            >
              <option value={0}>Visa</option>
              <option value={1}>Mastercard</option>
              <option value={2}>Discover</option>
            </select>
          </div>

          <input type="submit" value="Save" id={styles.submit_btn} />
        </form>
      </div>
    </div>
  );
};

export default EditCard;
