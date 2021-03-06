import React from "react";
import styles from "./App.module.scss";
import {Cards , AddCard, EditCard} from "./components";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (

    <Router>
      <div className={styles.container}>
      <Switch>
        <Route path="/" exact component={Cards} />
        <Route path="/cards/add" component={AddCard} />
        <Route path="/cards/:id/edit" component={EditCard} />
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
