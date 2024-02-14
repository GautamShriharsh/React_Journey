
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      {/* Accordian Component*/}
      {/* <Accordian/> */}

      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* {Star Rating Component} */}
      {<StarRating noOfStars={10}/>}
     
     </div>
    </>
  )
}

export default App
