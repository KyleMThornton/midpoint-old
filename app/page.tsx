"use client"

async function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
  })
}


export default function Home() {

  return (
    <main className='flex flex-col items-center'>
      <h1 className="text-lg py-2 m-4 font-semibold">My first Next.JS app</h1>
      <p className="p-5">Welcome to my first Next.js app. I'm mostly just messing around as I try to learn Next.js, Tailwind CSS, and Typescript while also brushing up on React.</p>
      <button className="rounded-full text-white bg-sky-500 p-5 hover:bg-sky-600 active:bg-sky-700" onClick={getLocation}>Get User Location</button>
      
    </main>
  )
}
