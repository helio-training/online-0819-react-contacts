import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/contacts/ContactList'
import { Rates } from './components/exchange/Rates'

function App() {
  
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Rates/> */}
        <ContactList/>
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
