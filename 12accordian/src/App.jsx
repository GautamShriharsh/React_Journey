
// import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view/index'
import menus from './components/tree-view/data'

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
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/>
      */}

      {/* Load-More-Data */}
       {/* <LoadMoreData/> */}
     
     {/* { Tree View Menu} */}
      <TreeView menus={menus}/>

     
     </div>
    </>
  )
}

export default App
