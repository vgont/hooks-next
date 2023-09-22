"use client";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  const handleClick = ()=> setCount(count+1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Contador</h1>
        <p className="mt-12 text-center">Número atual: {count}</p>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
      </div>
    </main>
  )
}
