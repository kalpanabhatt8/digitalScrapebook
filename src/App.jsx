import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white underline">
      Hello Tailwind v4 + Vite + React 🚀
    </div>
    </>
  )
}

export default App
