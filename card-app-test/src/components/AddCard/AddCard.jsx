import React, { useState } from "react";
import styles from "./AddCard.module.scss";
import chip_img from "../../assets/chip.png";
import visa_img from "../../assets/visa.png";
import master_img from "../../assets/master.png";
import discover_img from "../../assets/master.png";
const AddCard = () => {
  const [cardType, setCardType] = useState(0); //0-visa 1-master 2-discover
  const [firstDigits, setFirstDigits] = useState("0000");
  const [secondDigits, setSecondDigits] = useState("0000");
  const [thirdDigits, setThirdDigits] = useState("0000");
  const [fourthDigits, setFourthDigits] = useState("0000");
  const [userName, setUserName] = useState("USER NAME");
  const [expDate, setExpDate] = useState("");
  return (
    <div className={styles.container}>
      <h3>Add card to account</h3>
      <div className={styles.add_card}>
        <img src={chip_img} alt="chip image" />
        <img src={visa_img} alt="visa image" />
        <div className={styles.digits_holder}>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className={styles.name_expdate_holder}>
          <p></p>
          <p></p>
        </div>
      </div>
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="card number">Card Number</label>
          <div>
            <input type="text" name="first_digits" />
            <input type="text" name="second_digits" />
            <input type="text" name="third_digits" />
            <input type="text" name="fourth_digits" />
          </div>
          <label htmlFor="expiration date">Expires on</label>
          <input type="text" />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
};

export default AddCard;
