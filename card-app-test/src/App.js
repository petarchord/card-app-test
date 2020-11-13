import React from "react";
import styles from "./App.module.scss";
import {Cards} from "./components";
function App() {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
}

export default App;
