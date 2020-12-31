import Head from 'next/head'
import AnimalShelter from './src/AnimalShelter.jsx'


export default function Home() {
  return (
    <div className="bg-blue-200 text-black min-h-screen">
      <div className="p-10">
        <AnimalShelter />
      </div>
    </div>
  )
}
