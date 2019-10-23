import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EXCHANGE_STATIC, EXCHANGE_URL } from './config.js'
// const config = require('./config.js')

function App() {
  console.log('Exchange API URL:', EXCHANGE_URL)
  console.log('Exchange Static Dataset:', EXCHANGE_STATIC)
  console.log('Exchange Rate Keys', Object.keys(EXCHANGE_STATIC.rates))
  const rates = Object.keys(EXCHANGE_STATIC.rates).map((currencyName)=>{
    const rate = EXCHANGE_STATIC.rates[currencyName]
    return {
      cur: currencyName,
      rate
    }
  })
  console.log('Exchange Rates', rates)
  const displayRates = rates.map((rate)=> 
      <li>Currency: {rate.cur} - Rate: {rate.rate}</li>
    )
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {displayRates}
        </ul>
          
      </header>
    </div>
  );
}

export default App;



// let foo = fetch(EXCHANGE_URL).then((res)=>{
  //   console.log('Response:', res)
  //   console.log('Response JSON preDotThen:', res.json())

  //   return res
  // }).then((body)=>{
  //   console.log('Body JSON:', body.json())
  // })
  // console.log('foo', foo)
