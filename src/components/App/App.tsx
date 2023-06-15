import { useState, useEffect } from "react";
import classes from "./App.module.scss";
import { SendingBox } from "../SendingBox";
import { ReceivingBox } from "../ReceivingBox";

function App() {

  return (
    <div className={classes.App}>
      <SendingBox />
      <ReceivingBox />
    </div>
  );
}

export default App;
