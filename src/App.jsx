import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,EarthCanvas,Tech,BallCanvas,ComputersCanvas,StarsCanvas,Works} from "./components"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
 <BrowserRouter>
      <div className='bg-red-400 '>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
      
      </div>
    </BrowserRouter>
   </>
  )
}

export default App
