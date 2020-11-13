import React, { useState, useRef } from "react";
import styles from "./AddCard.module.scss";
import chip_img from "../../assets/chip.png";
import visa_img from "../../assets/visa.png";
import master_img from "../../assets/master.png";
import discover_img from "../../assets/discover.png";
const AddCard = () => {
  const userNameRef = useRef();
  const firstDigitsRef = useRef();
  const secondDigitsRef = useRef();
  const thirdDigitsRef = useRef();
  const fourthDigitsRef = useRef();
  const expDateRef = useRef();
  const checkCardType = () => {
    switch (cardType) {
      case 0: {
        return visa_img;
      }
      case 1: {
        return master_img;
      }
      case 2: {
        return discover_img;
      }
      default:
        return visa_img;
    }
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
      <div className={styles.add_card}>
        <img src={chip_img} alt="chip image" />
        <img
          src={checkCardType()}
          alt="visa image"
          onClick={() => {
            changeCardType();
          }}
        />
        <div className={styles.digits_holder}>
          <p
            onClick={() => {
              firstDigitsRef.current.focus();
            }}
          >
            {firstDigits}
          </p>
          <p
            onClick={() => {
              secondDigitsRef.current.focus();
            }}
          >
            {secondDigits}
          </p>
          <p
            onClick={() => {
              thirdDigitsRef.current.focus();
            }}
          >
            {thirdDigits}
          </p>
          <p
            onClick={() => {
              fourthDigitsRef.current.focus();
            }}
          >
            {fourthDigits}
          </p>
        </div>
        <div className={styles.name_expdate_holder}>
          <p
            onClick={() => {
              userNameRef.current.focus();
            }}
          >
            {userName}
          </p>
          <p
            onClick={() => {
              expDateRef.current.focus();
            }}
          >
            {expDate}
          </p>
        </div>
      </div>
      <div>
        <form>
          <div className={styles.input_holder}>
            <label htmlFor="name">Name</label>
            <input
              ref={userNameRef}
              type="text"
              name="name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
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
              />
              <input
                ref={secondDigitsRef}
                type="text"
                name="second_digits"
                onChange={(e) => {
                  setSecondDigits(e.target.value);
                }}
              />
              <input
                ref={thirdDigitsRef}
                type="text"
                name="third_digits"
                onChange={(e) => {
                  setThirdDigits(e.target.value);
                }}
              />
              <input
                ref={fourthDigitsRef}
                type="text"
                name="fourth_digits"
                onChange={(e) => {
                  setFourthDigits(e.target.value);
                }}
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
            />
          </div>

          <input type="submit" value="Save" id={styles.submit_btn} />
        </form>
      </div>
    </div>
  );
};

export default AddCard;
