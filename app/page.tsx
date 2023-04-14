"use client"
import { useState } from "react";

export default function Home() {
  const [myLocationLat, setMyLocationLat] = useState<number>();
  const [myLocationLon, setMyLocationLon] = useState<number>();
  const [theirLocation, setTheirLocation] = useState();

  async function getMyLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setMyLocationLat(position.coords.latitude);
      setMyLocationLon(position.coords.longitude);
    })
  }

  return (
    <main className='flex flex-col items-center'>
      <h1 className="text-lg py-2 m-4 font-semibold">My first Next.JS app</h1>
      <p className="p-5">Set your location and a second location to find the point in the middle.</p>
      <div className="flex p-5">
        <div className="flex flex-col items-center">
          <button className="rounded-full text-white bg-sky-500 p-5 hover:bg-sky-600 active:bg-sky-700 w-60" onClick={getMyLocation}>Get User Location</button>
          {myLocationLat ? <h2>Lat: {myLocationLat}</h2> : null }
          {myLocationLon ? <h2>Lon: {myLocationLon}</h2> : null }
        </div>
        <div className="flex flex-col items-center">
          <button className="rounded-full text-white bg-sky-500 p-5 hover:bg-sky-600 active:bg-sky-700 w-60">Get Second Location</button>
          <input type="text" className="border-2 border-black border-solid rounded m-5 w-96" />
        </div>
      </div>
    </main>
  )
}
