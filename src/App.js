import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';



function App() {
  const [input, setInput] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  // const [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");

  function handleOpChange(value) {
    console.log(input);
    setPrevNumber(input);
    setInput("");
    setOperator(value);
  }

  function evaluate(){
    console.log(input);
    console.log(prevNumber);
   
    console.log(operator);
    if (operator === "+") {
      console.log(prevNumber);
  
      setInput(parseInt(prevNumber)+parseInt(input));
      
    } else if (operator === "-") {

      setInput(parseInt(prevNumber)- parseInt(input));
      
    } else if (operator === "*") {

      setInput(parseInt(prevNumber) * parseInt(input));

    } else if (operator === "/") {

      setInput(parseInt(prevNumber) / parseInt(input));
    }


  }
 


  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <button className="btn">{input}</button>
        </div> 
        <div className="row">
          <button className="btn" onClick={() => setInput("")}>clear</button>
          <button className=" btn operator" onClick = { () => handleOpChange('*') } >*</button>
          <button className=" btn operator" onClick = { () => handleOpChange('/') } >/</button>
        </div>
        <div className="row">
          <button className="btn" onClick = { () => setInput(input+'7') } >7</button>
          <button className="btn" onClick = { () => setInput(input+'8') } >8</button>
          <button className="btn" onClick = { () => setInput(input+'9') } >9</button>
          <button className="btn operator" onClick={ () =>  handleOpChange('-') } >-</button>
        </div>
        <div className="row">
          <button className="btn" onClick = { () => setInput(input+'4') }>4</button>
          <button className="btn" onClick = { () => setInput(input+'5') }>5</button>
          <button className="btn" onClick = { () => setInput(input+'6') }>6</button>
          <button className="btn operator" onClick={ () => handleOpChange('+') }>+</button>
        </div>
        <div className="row">
          <button className="btn" onClick = { () => setInput(input+'1') }>1</button>
          <button className="btn" onClick = { () => setInput(input+'2') }>2</button>
          <button className="btn" onClick = { () => setInput(input+'3') }>3</button>
          <button className="btn operator" onClick={ () => evaluate('=') }>=</button>
        </div>
      </div>
      

     
    </div>
  );
}

export default App;
