import React from "react";
import styles from "./App.module.scss";
import {Cards , AddCard} from "./components";
function App() {
  return (
    <div className={styles.container}>
      <Cards />
      <AddCard />
    </div>
  );
}

export default App;
