import React, { useEffect, useState } from "react";
import "./Content.css";
import Card from "./Card";
import {Link} from 'react-router-dom'

export default function Content({theme, setTheme}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) throw new Error("something went wrong");
      const result = await response.json();
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false); 
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${input}`)
      if(!response.ok) throw new Error('something went wrong')
      const result = await response.json();
      setData(result);
      setInput('')
      setIsLoading(false)
      setError('')
      
    } catch (error) {
      setIsLoading(false)
      setError(error.message)
      setData([])
    }
    
  }

  const handleDropdown = async(regionName) => {
    try {

      const response = await fetch(`https://restcountries.com/v3.1/region/${regionName}`)
      if(!response.ok) throw new Error('something went wrong')
      const result = await response.json();
      setData(result)
      setIsLoading(false);
      setError('')
      
    } catch (error) {
      setIsLoading(false)
      setError(error.message);
      setData([])
      
    }
  }

  const handleChange = (e) => {
    const regionName = e.target.value;
    handleDropdown(regionName)
  }

  const lightStyle = {
    backgroundColor: 'hsl(0, 0%, 98%)',
    color: 'hsl(207, 26%, 17%)'
  }

  const darkStyle = {
    backgroundColor: 'hsl(207, 26%, 17%)',
    color: 'hsl(0, 0%, 100%)'
  } 

  return (
    <div className="content-body" style={theme === 'light' ? lightStyle : darkStyle}>
      <div className="first-content">
        <div className="inner">
          <form className="search-items" onSubmit={handleSubmit} style={theme === 'dark' ? {backgroundColor: 'hsl(209, 23%, 22%)', color: 'hsl(0, 0%, 100%)'} : {backgroundColor: 'hsl(0, 0%, 100%)', color: 'hsl(0, 0%, 52%)'}} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input style={theme === 'dark' ? {backgroundColor: 'hsl(209, 23%, 22%)', color: 'hsl(0, 0%, 100%)'} : {backgroundColor: 'hsl(0, 0%, 100%)', color: 'hsl(0, 0%, 52%)'}}  type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for a country..." />
          </form>
          <div className="dropdown-menu"  >
            <select onChange={handleChange} style={theme === 'dark' ? {backgroundColor: 'hsl(209, 23%, 22%)', color: 'hsl(0, 0%, 100%)'} : {backgroundColor: 'hsl(0, 0%, 100%)', color: 'hsl(0, 0%, 52%)'}} >
              <option value="africa" >Filter by Region</option>
              <option value="Africa" >Africa</option>
              <option value="America" >America</option>
              <option value="Asia" >Asia</option>
              <option value="Europe" >Europe</option>
              <option value="Oceania" >Oceania</option>
            </select>
          </div>
        </div>
      </div>
      <div className="second-content">

        {
          isLoading && !error && <h4>Loading...</h4>
        }
        {
          !isLoading && error && <h4>{error}</h4>
        }

        {
          data &&
          data.map((detail) =>(
          <Link key={detail.name.common} to={`/country/${detail.name.common}`}>
            <div className="card-details" >
              <Card theme = {theme} flag={detail.flags.png} name={detail.name.common} population={detail.population} region={detail.region} capital={detail.capital} />
            </div>
          </Link>
          ))
        }

        
      </div>
    </div>
  );
}
