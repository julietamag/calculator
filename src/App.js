import './App.css';
import React, { useState } from 'react';


function App() {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState(0);
  const [currentNum, setCurrentNum] = useState('')
  const ops = ['/', '*', '+', '-'];

  function handleOperator(e) {
    const operator = e.target.value;
    console.log(calculation)
    
    // do not let more than one operand
    if (calculation[-1] === operator) {
      return
    }
    //   if last char is not a number, replace it with the new operator clicked
    // } else if (!Number(calculation.slice(-1))) {
    //   newOperand = calculation.slice(0, -1);
    //   setCalculation(newOperand + operator);
    //   setCurrentNum(operator)
    //   return;
    if (operator === '.' && currentNum.includes('.')) {
      return
    }
    else {
      if (operator === '.') {
        setCurrentNum(currentNum + operator);
        console.log(calculation)
        setCalculation(calculation + operator)
      } else {
        setCurrentNum(operator)
        setCalculation(calculation + operator);
        return;
      }
    }

  }

  function handleClick(e) {
    let operando = e.target.value
    if(currentNum === '0' && operando === '0'){
        return;
      
    }
   
    //if last value clicked was an operator, do not set the current number with the operator 
    if (ops.includes(currentNum)) {
      setCurrentNum(operando)
      setCalculation(calculation + operando)
    }
    else {
      setCurrentNum(currentNum + operando)
      setCalculation(calculation + operando)
    }


  }

  function handleAC() {
    setCurrentNum('')
    setCalculation('')
    setResult('')
  }

  function handleResult() {
    // eslint-disable-next-line no-eval
    const operation = eval(calculation)
    setResult(operation)
    setCalculation(operation)
  }

  return (
    <div className="App">
      <div id='calculator'>
        <div id='display-container'>
          <div id='display-small'>{calculation || ''}</div>
          <div id='display'>{result || currentNum || 0}</div>
        </div>
        <div id='buttons-container'>
          <button onClick={handleAC} className='button' id='clear'>AC</button>
          <button onClick={handleOperator} value='/' className='button operando' id='divide'>/</button>
          <button onClick={handleOperator} value='*' className='button operando' id='multiply'>*</button>
          <button onClick={handleClick} value='7' className='button number' id='seven'>7</button>
          <button onClick={handleClick} value='8' className='button number' id='eight'>8</button>
          <button onClick={handleClick} value='9' className='button number' id='nine'>9</button>
          <button onClick={handleOperator} value='-' className='button operando' id='subtract'>-</button>
          <button onClick={handleClick} value='4' className='button number' id='four'>4</button>
          <button onClick={handleClick} value='5' className='button number' id='five'>5</button>
          <button onClick={handleClick} value='6' className='button number' id='six'>6</button>
          <button onClick={handleOperator} value='+' className='button operando' id='add'>+</button>
          <button onClick={handleClick} value='1' className='button number' id='one'>1</button>
          <button onClick={handleClick} value='2' className='button number' id='two'>2</button>
          <button onClick={handleClick} value='3' className='button number' id='three'>3</button>
          <button onClick={handleResult} value='=' className='button' id='equals'>=</button>
          <button onClick={handleClick} value='0' className='button number zero' id='zero'>0</button>
          <button onClick={handleOperator} value='.' className='button decimal' id='decimal'>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
