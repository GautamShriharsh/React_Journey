
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <div >
      {/* Accordian Component*/}
      {/* <Accordian/> */}

      {/* Random Color Component */}
      {/* <RandomColor/> */}

      {/* {Star Rating Component} */}
      {/* {<StarRating noOfStars={10}/>} */}
      
      {/* {Image Slider} */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/>
     
     </div>
    </>
  )
}

export default App
