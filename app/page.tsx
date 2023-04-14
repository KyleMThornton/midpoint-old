import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex justify-center'>
      <h1 className="text-lg py-2 m-4">My first Next.JS app</h1>
    </main>
  )
}
