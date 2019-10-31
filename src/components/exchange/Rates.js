import React from 'react'
import { EXCHANGE_STATIC, EXCHANGE_URL } from '../../config'

export const Rates = () => {
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
      <ul>
        {displayRates}
      </ul>
    )
}