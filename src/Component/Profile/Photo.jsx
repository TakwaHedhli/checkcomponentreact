import React from 'react'
import myProfil from './Images/imageprofil.jpeg'

const Photo = () => {
  return (
    <div>
        <h1>PhotoProfile</h1>
<img src={myProfil} alt="image" />
    </div>
  )
}

export default Photo