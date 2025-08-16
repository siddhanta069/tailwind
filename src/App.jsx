import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Container from './components/container'

const App = () => {
  return (
    <div className="h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)] ">
      <div className = "max-w-7xl mx-auto absolute inset-0 h-full w-full">
        <div className = "absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent pointer-events-none z-0" />
        <div className = "absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300 via-neutral-200 to-transparent pointer-events-none z-0" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className='h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-tranparent pointer-events-none z-0' />
        {/* <Image src= "/banner.webp" alt="banner" width={1000} height={1000}/> */}
      </div>
    </div>
  )
}

export default App