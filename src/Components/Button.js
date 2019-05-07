import React, { useState } from "react";
import '../Styles/general.scss';

export default function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");
  return (
    <button className='test' onClick={() => setButtonText("Thanks, been clicked!")}>
      {buttonText}
    </button>
  );
}