import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({noofStars = 5}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleclick = (getCurrentIndex) => {
        console.log(getCurrentIndex)
    }

    const handleMouseEnter = (getCurrentIndex) => {
        console.log(getCurrentIndex)

    }

    const handleMouseLeave = (getCurrentIndex) =>{
        console.log(getCurrentIndex)

    }

  return (
    <div className='star-rating'>
        {
            [...Array(noofStars)].map((_, index)=>{
                //increment index by 1 because of it start from 0
                index += 1

                return <FaStar 
                key={index} 
                onClick={()=> handleclick(index)} 
                onMouseMove={()=> handleMouseEnter(index)} 
                onMouseLeave={()=> handleMouseLeave(index)} 
                size={40}/>
            })
        }
    </div>
  )
}

export default StarRating