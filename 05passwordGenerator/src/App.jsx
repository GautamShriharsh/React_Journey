import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) {
      str += '01234566789';
    }
    if (charAllowed) {
      str += '`~!@#$%^&*()-_=+[{]}\|;:",<.>/?';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
   
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pt-3 pb-3'>
        <h1 className="text-white text-center text-2xl">Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 justify-center items-center container'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='Password'
          readOnly
         />
         <button
         className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
         >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id='numInput'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
             />
            <label htmlFor='numInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
           <input 
           type="checkbox" 
           defaultChecked={charAllowed}
           id='charInput'
           onChange={() => {
            setCharAllowed((prev) => !prev)
           }}
           />
           <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
