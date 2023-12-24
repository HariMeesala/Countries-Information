import React from 'react'
import './Card.css'

export default function Card( props ) {

  const myImage = {
    backgroundImage: `url(${props.flag})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '270px',
    height: '50%',
    zIndex: '2'

  }

  const darkStyle = {
    backgroundColor: 'hsl(209, 23%, 22%)',
    color: 'hsl(0, 0%, 100%)'

  }
  const lightStyle = {
    backgroundColor: 'hsl(0, 0%, 100%)',
    color: '#000'
  }

  return (
    <div className='card-body' style={props.theme === 'dark' ? darkStyle : lightStyle} >
      <div className='flag-image' style={myImage}>
      </div>
      <div className='card-content'>
        <div className='country-name' >
        <h3>{props.name}</h3>
        </div>
        
        <h4>Population: {props.population}</h4>
        <h5>Region: {props.region}</h5>
        <h6>Capital: {props.capital}</h6>

      </div>
    </div>
  )
}
