import React, { useState, useEffect } from "react";
import MainBanner from "./components/MainBanner";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <MainBanner />  
      <Body />
    </div>
  );
}

export default App;
