import React from 'react'

const Hero = () => {
  return (
    <div className= "px-4 py-2 flex flex-col items-center w-full my-2" >
      <button className="px-4 py-1 border rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer duration-200 bg-gray-100 text-gray-600">
        What are early stage tax requirements?
      </button>

      <div className='font-medium mt-5 text-7xl text-black tracking-tighter text-center'>
        <h1>Magically simplify <br/> accounting and taxes</h1>
        <p className='max-w-xl text-center mt-4 mx-auto text-xl text-neutral-700 tracking-tight'>
          Automated bookkeeping, effortless tax filing, real-time insight. Set
          up in 10 mins. Back to building by 4:09pm.
        </p>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <button className= "bg-[#2579f4] px-4 py-2 rounded-lg text-white font-medium shadow-lg text-shadow-md tracking-wide cursor-pointer">Start free trial</button>
        <button className= "px-4 py-2 rounded-lg text-black font-medium text-shadow-md tracking-wide cursor-pointer">Pricing</button>
      </div>
    </div> 
  )
}

export default Hero
