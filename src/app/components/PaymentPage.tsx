'use client'
import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { LockIcon, CreditCardIcon, TicketCheck } from 'lucide-react'
import { TiTick } from "react-icons/ti";

// 7774 1414 1414 1474 card number demo 
const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  console.log(errorMessage);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsProcessing(true)

    if (!elements) {
      setIsProcessing(false)
      return
    }

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrorMessage(submitError.message ?? 'An error occurred')
      setIsProcessing(false)
      return
    }

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ amount: 5000 }),
      })

      const { client_secret: clientSecret } = await res.json()

      const { error } = await stripe!.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      })

      if (error) {

        setErrorMessage("Payment Succesfully added to your account");
      }


    } catch (err) {
      setErrorMessage('An unexpected error occurred')
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe || !elements || isProcessing}
        className="w-full"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </Button>
      {errorMessage && (
        <Alert variant="default">
          <TiTick color='green' size={20} />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}

const stripePromise = loadStripe('pk_test_51QBNF4AlIDCy873ZJnUEheWZZtMGZ8FZGVNQEochPiQqcUfmqazoWiQt1VVa3tnqTc7teOf8m94YeP3Cq9BomczW00QphgsX6R')

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  appearance: {
    theme: 'stripe',
    variables: {
      colorPrimary: '#0284c7',
      colorBackground: '#ffffff',
      colorText: '#1e293b',
      colorDanger: '#ef4444',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  },
}

const PaymentPage = () => {
  return (
    <div className="h-[50%] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <CreditCardIcon className="w-6 h-6" />
            Secure Payment
          </CardTitle>
          <CardDescription>Complete your purchase securely</CardDescription>
        </CardHeader>
        <CardContent>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </CardContent>
        <CardFooter className="flex items-center justify-center text-sm text-gray-500">
          <LockIcon className="w-4 h-4 mr-2" />
          Your payment is secure and encrypted
        </CardFooter>
      </Card>
    </div>
  )
}

export default PaymentPage