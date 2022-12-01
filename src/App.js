import './App.css';
import React from 'react';

function App() {
  const [number, setNumber] = React.useState(null)
  let response = ''
  const isPrimeFunction = (number) => {
    let sqrtnum = Math.floor(Math.sqrt(number));
    let prime = number !== 1;
    for (let i = 2; i < sqrtnum + 1; i++) {
      if (number % i === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }

  const handleSubmit = (data) => {
    if (!data) {
      response = 'Please enter a non-zero number'
    } else if (data === 1) {
      response = `1 is neither prime nor composite number.`
    } else if (data > 1) {
      const nextPrime = (data = 1) => {
        while (!isPrimeFunction(++data)) {
        }
        return data;
      }
      if (isPrimeFunction(data)) {
        response = `${data} is a prime number and the next Prime number is ${nextPrime(data)} and the difference between the two is ${nextPrime(data) - data}`
      } else {
        response = `${data} is a not prime number but the next Prime number is ${nextPrime(data)} and the difference between the two is ${nextPrime(data) - data}`
      }
    } else {
      response = `The number is not a positive number`
    }
  }

  return (
    <div className="App">
      <label>
        Enter a number:
      </label>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleSubmit(parseInt(number))} hidden>Submit</button>
      <br />
      <text>{response}</text>
    </div>
  );
}

export default App;