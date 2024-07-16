import "./styles/global.css";

import logoIMG from "./assets/logo.png";
import { useState } from "react";

export function App() {
  const [activeButton, setActiveButton] = useState<boolean>(true);

  function activeButtonStyle() {
    setActiveButton(!activeButton);
  }

  return (
    <div className="container">
      <div className="top-buttons">
        <button
          onClick={activeButtonStyle}
          style={
            activeButton
              ? { background: "#4269e2" }
              : { background: "transparent" }
          }
        >
          login
        </button>
        <button
          onClick={activeButtonStyle}
          style={
            !activeButton
              ? { background: "#4269e2" }
              : { background: "transparent" }
          }
        >
          signup
        </button>
      </div>
      <div className="form-login">
        <img src={logoIMG} alt="foodIMG" />
        <p>Welcome Back</p>

        <input type="text" placeholder="you@yourmail.com" />

        <div className="bottom-form">
          <button>Next</button>
          <a href="#">FORGOT PASSWORD</a>
        </div>
      </div>
    </div>
  );
}
