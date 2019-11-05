import React from 'react';
import './App.css';
import ContactList from './components/contacts/ContactList'
import CreateContact from './components/contacts/CreateContact'
// import { Rates } from './components/exchange/Rates'

function App() {
  
  return (
    <div className="">
      <header className="App-header">
        {/* <Rates/> */}
        <CreateContact/>
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
