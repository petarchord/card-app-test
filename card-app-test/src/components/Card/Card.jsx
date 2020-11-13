import React, { useState } from "react";
import styles from "./Card.module.scss";
import chip_img from "../../assets/chip.png";
import visa_img from "../../assets/visa.png";
import master_img from "../../assets/master.png";
import discover_img from "../../assets/discover.png";
import { useHistory } from "react-router-dom";

const Card = ({
  cardType,
  userName,
  firstDigits,
  secondDigits,
  thirdDigits,
  fourthDigits,
  expDate,
  userNameRef,
  firstDigitsRef,
  secondDigitsRef,
  thirdDigitsRef,
  fourthDigitsRef,
  expDateRef,
}) => {
  const history = useHistory();
  //   const [cardType, setCardType] = useState(0); //0-visa 1-master 2-discover
  const checkCardType = () => {
    switch (cardType) {
      case "0": {
        return visa_img;
      }
      case "1": {
        return master_img;
      }
      case "2": {
        return discover_img;
      }
      default:
        return visa_img;
    }
  };

  return (
    <div className={styles.add_card}>
      <img src={chip_img} alt="chip image" />
      <img src={checkCardType()} alt="card tpye image" />
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
  );
};

export default Card;
