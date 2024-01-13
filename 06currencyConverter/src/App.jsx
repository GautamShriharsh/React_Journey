import { useState } from 'react'
import { InputBox } from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import './App.css'
  
function App() {
  
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(setConvertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-500'> Currency App</h1>
    </>
  )
}

export default App
