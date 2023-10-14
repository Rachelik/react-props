import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

// var numbers = [3, 56, 2, 48, 50];

// const newNumbers = numbers.map( x => {
//   return x * x;
// });

// const newNumbers = numbers.map((x, y) => {
//   return x * x;
// })


// const newNumbers = numbers.map( x => x * x);

//Map - Create a new array by doing something with each item in an array.
// function double(x) {
//   return x*2;
// }
// const doubleNumbers = numbers.map(double);
// console.log(doubleNumbers);

// var newNumbers = [];
// function doubleForEach(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(doubleForEach);

// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num) {
//   return num > 10
// });

// console.log(newNumbers);


//Reduce - Accumulate a value by doing something to each item in an array.
//Find - find the first item that matches from an array.
//FindIndex - find the index of the first item that matches.



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
