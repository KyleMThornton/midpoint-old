"use client"
import { useState } from "react";

export default function Home() {
  const [myLocationLat, setMyLocationLat] = useState<number>();
  const [myLocationLon, setMyLocationLon] = useState<number>();
  const [theirLocation, setTheirLocation] = useState();

  async function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setMyLocationLat(position.coords.latitude);
      setMyLocationLon(position.coords.longitude);
    })
  }

  return (
    <main className='flex flex-col items-center'>
      <h1 className="text-lg py-2 m-4 font-semibold">My first Next.JS app</h1>
      <p className="p-5">Welcome to my first Next.js app. I'm mostly just messing around as I try to learn Next.js, Tailwind CSS, and Typescript while also brushing up on React.</p>
      <button className="rounded-full text-white bg-sky-500 p-5 hover:bg-sky-600 active:bg-sky-700" onClick={getLocation}>Get User Location</button>
      {myLocationLat ? <h2>{myLocationLat} + {myLocationLon}</h2> : null }
      <input type="text" className="border-2 border-black border-solid rounded m-5 w-96" />
      <button className="rounded-full text-white bg-sky-500 p-5 hover:bg-sky-600 active:bg-sky-700">Set Second Location</button>
    </main>
  )
}
