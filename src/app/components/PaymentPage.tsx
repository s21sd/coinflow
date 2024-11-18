
import React from 'react'
import {checkout}  from '@/checkout'
export const PaymentPage = () => {
  return (
    <button onClick={()=>{
      checkout({
        lineItems:[{
          price:"price_1QKfYhAlIDCy873ZBd1h0XrA",quantity:1
        }]
      })
    }}>
      Buy now
    </button>
  )
}
