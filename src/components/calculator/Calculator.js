import React from "react";
import './calculator.css';

export default function Calculator() {

  const [display, setDisplay] = React.useState('');
  const removeLeadingZeros = (str) => (str.replace(/^(-?)0+(?=\d)/, '$1'));

const handleButtonClick = (button) => {
const lastChar = display.slice(-1);
 if (button === 'c') {
    setDisplay('');
  } else if (button === '=') {
    if (/[0-9]/.test(lastChar)) {
      calculateResult();
    }
  } else {
    // Handle digit and operator buttons
    if (button === '0') {
      if (lastChar === '-') {
        setDisplay((prev) => prev);
      }
      if (lastChar === '0') {
        setDisplay((prevDisplay) => removeLeadingZeros(prevDisplay.slice(0, -1) + '0'));
        if (/[+\/*]/.test(display.at(-2))) {
          setDisplay((prev) => prev.slice(0, -1));
        }
      }
    }
    if (/[0-9]/.test(button)) {
      // If the last entered character is '0', replace it with the new digit
      if (/^[-+\/*]$/.test(display.at(-2)) && display.at(-1) === '0') {
        setDisplay((prev) => (prev.slice(0, -1) + button));
      } else {
        setDisplay((prev) => (prev === '0' ? button : prev + button));
      } 
    } else {
      // Handle operator buttons
      if (/[0-9]/.test(lastChar)) {
        setDisplay((prev) => prev + button);
      } else if (button === '-') {
        // Allow negative sign after another operator or at the beginning
        setDisplay((prev) => {
          if(lastChar === '-') return prev;
          else if (lastChar === '+') return prev.slice(0, -1) + button;
          else return prev + button
        }
       );
      } 
      else if (/[-+\/*]/.test(lastChar)) {
        if (display.at(-2) === '/' && display.at(-1) === '-' && ['+', '/','*'].includes(button)) {
          setDisplay((prev) => prev);
        }
        // Replace the last operator with the new one
        else setDisplay((prev) => prev.slice(0, -1) + button);
      }
    }
  }
};

  const clearDisplay = () => {
  setDisplay('');
};

  const calculateResult = () => {
    try {
      const result = eval(display.replace(/\/\//g, '/')); // Replace double division with single division
      if (result === Infinity || result === -Infinity || isNaN(result)) {
        // Handle division by zero or other invalid operations
        clearDisplay();
      } else {
        // Display the result
        setDisplay(result.toString());
      }
    } catch (error) {
      clearDisplay();
    }
  };

  return (
    <div className="calculator">
      <div className="display" data-testid="output">{display}</div>
      <div className="buttons">
        <button data-testid="digit-0" onClick={() => handleButtonClick('0')}>0</button>
        <button data-testid="digit-1" onClick={() => handleButtonClick('1')}>1</button>
        <button data-testid="digit-2" onClick={() => handleButtonClick('2')}>2</button>
        <button data-testid="digit-3" onClick={() => handleButtonClick('3')}>3</button>
        <button data-testid="digit-4" onClick={() => handleButtonClick('4')}>4</button>
        <button data-testid="digit-5" onClick={() => handleButtonClick('5')}>5</button>
        <button data-testid="digit-6" onClick={() => handleButtonClick('6')}>6</button>
        <button data-testid="digit-7" onClick={() => handleButtonClick('7')}>7</button>
        <button data-testid="digit-8" onClick={() => handleButtonClick('8')}>8</button>
        <button data-testid="digit-9" onClick={() => handleButtonClick('9')}>9</button>
        <button data-testid="op-add" onClick={() => handleButtonClick('+')}>+</button>
        <button data-testid="op-sub" onClick={() => handleButtonClick('-')}>-</button>
        <button data-testid="op-mul" onClick={() => handleButtonClick('*')}>*</button>
        <button data-testid="op-div" onClick={() => handleButtonClick('/')}>/</button>
        <button data-testid="eq" onClick={() => handleButtonClick('=')}>=</button>
        <button data-testid="clear" onClick={() => handleButtonClick('c')}>c</button>
      </div>
    </div>
  );
};
