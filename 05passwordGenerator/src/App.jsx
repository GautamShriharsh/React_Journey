import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  


  return (
    <>
     <h1 className='text-4xl text-center'>Password Generator</h1>

    </>
  )
}

export default App
