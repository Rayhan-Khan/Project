import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './component/HomePage'
import { ProductDeatils } from './component/ProductDeatils'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      <Route  element={<Header />}> 
         <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<ProductDeatils />} />
    </Route>
    </Routes>
    </>
  )
}

export default App
