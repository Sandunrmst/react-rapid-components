import React, { useEffect } from 'react'
import { useState } from 'react'
import "./styles.css";


const RandomColor = () => {
    const [typeOfColor, setTypeColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const randomColorGenerate  = (length)=>{
      return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor(){
      const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
      let hexColor = "#"

      for(let i=0; i<6; i++){
        hexColor += hex[randomColorGenerate(hex.length)]
      }

      setColor(hexColor)

    }

    function handleCreateRandomRgbColor(){
      const r = randomColorGenerate(256)
      const g = randomColorGenerate(256)
      const b = randomColorGenerate(256)

      setColor(`rgb(${r}, ${g}, ${b})`)
    }

    useEffect(()=>{
      if(typeOfColor === "rgb") handleCreateRandomRgbColor();
      else handleCreateRandomHexColor()
    }, [typeOfColor])

  return (
    <div style={{width: "100%", height:"100vh", background: color}}>
      <div className='randommain'>
      <div className='btnrandom'>
        <button className='btnrandom' onClick={()=> setTypeColor('hex')}>Create HEX Color</button>
        <button className='btnrandom' onClick={()=> setTypeColor('rgb')}>Create RGB Color</button>
        <button className='btnrandom'  onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      </div>

      <div className='colorCode'>
        <h2>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h2>
        <h1>{color}</h1>
      </div>
      </div>
    </div>
  )
}

export default RandomColor