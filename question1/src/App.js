import React from 'react';

class NumberList extends React.Component {
  state = {
    fibonacciNumbers: [],
    primeNumbers: [],
    evenNumbers: []
  };

  componentDidMount() {
    this.generateFibonacciNumbers();
    this.generatePrimeNumbers();
    this.generateEvenNumbers();
  }

  generateFibonacciNumbers = () => {
    const fibNumbers = [0, 1];
    let i = 2;
    while (i < 20) {
      fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
      i++;
    }
    this.setState({ fibonacciNumbers: fibNumbers });
  };

  isPrime = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num !== 1;
  };

  generatePrimeNumbers = () => {
    const primeNumbers = [];
    for (let i = 1; i <= 100; i++) {
      if (this.isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    this.setState({ primeNumbers });
  };

  generateEvenNumbers = () => {
    const evenNumbers = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    this.setState({ evenNumbers });
  };

  render() {
    return (
      <div>
        <h3>Fibonacci Numbers:</h3>
        <ul>
          {this.state.fibonacciNumbers.map(num => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        <h3>Prime Numbers:</h3>
        <ul>
          {this.state.primeNumbers.map(num => (
            <li key={num}>{num}</li>
          ))}
        </ul>
        <h3>Even Numbers:</h3>
        <ul>
          {this.state.evenNumbers.map(num => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NumberList;
