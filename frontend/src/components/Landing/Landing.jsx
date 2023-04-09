import React from "react";
import { Features, Header, WhatGPT3 } from "./containers";
import './Landing.css'
import './index.css'

function Landing() {
  return (
    <div className="Landing">
      <div >
        <Header />
      </div>
      <WhatGPT3 />
      <Features />

    </div>
  );
}

export default Landing;
