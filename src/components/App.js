import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {

  const [count, setCount] = useState(false);

  function HelloText() {
      return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>;
    }

    function NullText() {
      return <h1>bye</h1>;
      }
  
  var headingText;
  if (count) {
    headingText = <HelloText />;
  } else {
    headingText = <NullText />;
  }
  return (
    <div id="main">
      {headingText}
      <button id="click" onClick={()=> setCount(!count)}>Click</button>
    </div>
    );
}
export default App;
