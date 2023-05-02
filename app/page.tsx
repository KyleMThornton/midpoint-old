'use client'

import { useState, useEffect, useRef } from "react";
import axios from "axios";

const API = '';

export default function Home() {
  const [myLocationLat, setMyLocationLat] = useState<number>();
  const [myLocationLon, setMyLocationLon] = useState<number>();
  const [theirLocationLat, setTheirLocationLat] = useState<number>();
  const [theirLocationLon, setTheirLocationLon] = useState<number>();
  const [inputValue, setInputValue] = useState<any>();
  const inputRef = useRef<any>();

  async function getMyLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setMyLocationLat(position.coords.latitude);
      setMyLocationLon(position.coords.longitude);
    })
  }

  async function getTheirLocation(zipCode: number | undefined) {
    await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${zipCode}&key=${API}`).then(response => {
      console.log(response.data)
    })
  }

  async function clearLocation() {
    setMyLocationLat(0);
    setMyLocationLon(0);
  }

  // const handleInputChange = (event: { target: { value: any; }; }) => {
  //   setInputValue(event.target.value);
  // }

  const handleClick = () => {
    getTheirLocation(inputRef.current.value);
  }

  return (
    <main className='flex flex-col items-center'>
      <h1 className="text-lg py-2 m-4 font-semibold">My first Next.JS app</h1>
      <p className="p-5">Set your location and a second location to find the point in the middle.</p>
      <div className='flex flex-col items-center'>
        <div className="flex p-5">
          <div className="flex flex-col items-center">
            <button className="rounded-full text-white bg-sky-500 p-4 hover:bg-sky-600 active:bg-sky-700 w-60" onClick={getMyLocation}>Get User Location</button>
            {myLocationLat ? <h2 className="mt-5">Lat: {myLocationLat}</h2> : null }
            {myLocationLon ? <h2>Lon: {myLocationLon}</h2> : null }
          </div>
          <div className="flex flex-col items-center">
            <button className="rounded-full text-white bg-sky-500 p-4 hover:bg-sky-600 active:bg-sky-700 w-60" onClick={handleClick}>Get Second Location</button>
            <input 
              type="text" 
              className="border-2 border-black border-solid rounded m-5 w-60"
              value={inputValue}
              // onChange={handleInputChange}
              ref={inputRef} 
            />
          </div>
        </div>
        <div>
          {myLocationLat ? <iframe
            src={`https://maps.google.com/maps?q=${myLocationLat},${myLocationLon}&output=embed`}
            width={600}
            height={400}
            allowFullScreen>
          </iframe> : <iframe
            src={`https://maps.google.com/maps?q=""&output=embed`}
            width={600}
            height={400}
            allowFullScreen>
          </iframe> }
        </div>
        <div>
          <button onClick={clearLocation} className="rounded-full text-white bg-sky-500 mt-5 p-4 hover:bg-sky-600 active:bg-sky-700 w-60">Clear Location</button>
        </div>
      </div>
    </main>
  )
}
