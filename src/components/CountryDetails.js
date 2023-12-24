import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './CountryDeatils.css'

export default function CountryDetails({theme, setTheme}) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const { countryName } = useParams()


    
    

    useEffect(() => {
        const getCountryByName = async() => {

            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                if(!response.ok) throw new Error('something went wrong')
                const result = await response.json();
                setData(result)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }
    
        }
        getCountryByName()
    }, [countryName])

  return (
    <div className='main-container' style={theme === 'dark' ? {backgroundColor: 'hsl(207, 26%, 17%)', color: 'hsl(0, 0%, 100%)'} : {backgroundColor: 'hsl(0, 0%, 100%)', color: '#000'}} >
        <div className='link-btn' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>

            <Link className='links' to="/">Back</Link>
        </div>
        
        {
            isLoading && !error && <h4>Loading....</h4>
        }
        {
            error && !isLoading && <h4>{error}</h4>
        }
        {
            data && data.map((country, index) => (
                <div key={country.name.common} className='detail-container '>
                    <div className='detail-image'>
                        <img src={country.flags.png} alt='' />
                    </div>
                    <div className='detail-content'>
                        <div className='detail-name'>
                            <h1>{country.name.common}</h1>
                        </div>
                        <div className='detail-content-1'>
                                <h5>Population: {country.population}</h5>
                                <h5>Region: {country.region}</h5>
                                <h5>Sub Region: {country.subregion}</h5>
                                <h5>Capital: {country.capital}</h5>
                        </div>
                        
                        
                    </div>
                </div>
            ))
        }
    </div>
  )
}
