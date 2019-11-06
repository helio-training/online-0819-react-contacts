import React from 'react';
import './App.css';

// import { Rates } from './components/exchange/Rates'
import Contacts  from './components/contacts'

function App() {
  console.log('Rendering App')
  return (
    <div className="">
      <header className="App-header">
        {/* <Rates/> */}
        <Contacts/>
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
