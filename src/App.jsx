import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './data.js'


function App() {
  const places = data.map((data)=>{
    return (
      <Card 
      key={data.id}
      {...data}/>
    )
  })

  return (
    <div>
      <Navbar />
      <div className='places-section'>{places}</div>
      
    </div>
  )
}

export default App
