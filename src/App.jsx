import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <>
     <div className='text-neutral-400 antialiased overflow-hidden selection:text-white'>
      {/* <div className='fixed top-0 z-10 h-full w-full'></div> */}

     <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
     </div>
      <div className='container mx-auto max-w-full'>

      <Navbar/>
      </div>
      sdafsdfsfsfsfsf
     </div>
     
   </>
  )
}

export default App