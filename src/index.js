import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import New from './New';
import reportWebVitals from './reportWebVitals';



// Create a class

// How to create variable
const name = "ajay,amit,nanay";


// How to create object
const student = {name:"ab", age:21};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>my name is {student.name} and my {student.age} age</p>
    <h1> Iam {name} from Pune</h1>
  
    <App />
    {/* <New /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
