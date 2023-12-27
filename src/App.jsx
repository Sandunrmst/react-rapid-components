
import './App.css'
import Faqs from './components/faq'
import ImageSlider from './components/imsgeslider'
import RandomColor from './components/randomcolor'
import StarRating from './components/starrating'

function App() {

  

  return (
    <>
      {/* <Faqs/> */}

      {/* <RandomColor/> */}

      {/* <StarRating noofStars={8}/> */}

      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={6}/>
    </>
  )
}

export default App
