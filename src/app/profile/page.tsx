'use client'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CopyIcon, ExternalLinkIcon } from 'lucide-react'
import { toast } from "sonner"
import { ImCross } from "react-icons/im";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js'
import { PaymentPage } from '../components/PaymentPage'
import { checkout } from '@/checkout'
const stripePromise = loadStripe("pk_test_51QBNF4AlIDCy873ZJnUEheWZZtMGZ8FZGVNQEochPiQqcUfmqazoWiQt1VVa3tnqTc7teOf8m94YeP3Cq9BomczW00QphgsX6R");
export default function CryptoProfilePage() {

  const [image, setImage] = useState<string | null>("");
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    setName(localStorage.getItem("displayName"));
    setImage(localStorage.getItem("photoURL"))
  }, [])
  console.log("name", name);
  const [user, setUser] = useState({
    name: "Sunny Srivastava",
    email: 'sunnysrivastava258@gmail.com',
    walletAddress: '0x1234...5678',   // After login with google id
    balance: '1.5 ETH',
    transactions: [
      { id: 1, type: 'Buy', amount: '0.5 ETH', date: '2023-05-15' },
      { id: 2, type: 'Sell', amount: '0.2 BTC', date: '2023-05-10' },
      { id: 3, type: 'Buy', amount: '100 USDT', date: '2023-05-05' },
    ]
  })



  const [isModalOpen, setIsModalOpen] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied!')
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className={`container mx-auto p-4 transition ${isModalOpen ? 'filter blur-md' : ''}`}>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={image!} alt={user?.name!} />
                <AvatarFallback>{user?.name?.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Wallet Address</h3>
              <div className="flex items-center space-x-2">
                <code className="bg-gray-100 p-2 rounded">{user.walletAddress}</code>
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(user.walletAddress)}>
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className="text-lg font-semibold mb-2">Balance</h3>
                <p className="text-2xl font-bold">{user.balance}</p>
              </div>
              <Button onClick={() => {
                checkout({
                  lineItems: [{
                    price: "price_1QKfYhAlIDCy873ZBd1h0XrA", quantity: 1
                  }]
                })
              }} >Buy Now</Button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
              <ul className="space-y-2">
                {user.transactions.map(transaction => (
                  <li key={transaction.id} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span>{transaction.date}</span>
                    <span>{transaction.type}</span>
                    <Badge variant={transaction.type === 'Buy' ? 'default' : 'secondary'}>
                      {transaction.amount}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <ExternalLinkIcon className="w-4 h-4 mr-2" />
              View Full Transaction History
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Modal - PaymentPage */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 m-2"
              onClick={closeModal}
            >
              <ImCross />

            </button>
            {/* <Elements stripe={stripePromise}> */}
            <PaymentPage />
            {/* </Elements> */}
          </div>
        </div>
      )}
    </div>
  )
}
