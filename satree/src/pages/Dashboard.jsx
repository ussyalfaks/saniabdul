import React from 'react'


const   Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
 <div className="bg-gradient-to-br from-cyan-800 via-cyan-500 to-red-800 p-4 rounded-xl shadow-lg max-w-sm">
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4">
      <h2 className="text-xl font-bold text-center mb-4 font-mono text-white">Children</h2>
      <div className='flex justify-around border-t-2 border-white border-opacity-30 pt-4'>
        <div className='text-center'>
          <h1 className='font-semibold text-xl font-mono text-white'>Alive</h1>
          <h3 className='text-3xl font-bold text-white'>67</h3>
        </div>
        <div className='h-16 w-0.5 bg-white bg-opacity-30'></div>
        <div className='text-center'>
          <h1 className='font-semibold text-xl font-mono text-white'>Deceased</h1>
          <h3 className='text-3xl font-bold text-white'>27</h3>
        </div>
      </div>
    </div>
    
  </div>

  
  <div className="bg-gradient-to-br from-blue-800 via-pink-500 to-slate-600 p-4 rounded-xl shadow-lg max-w-sm">
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4">
      <h2 className="text-xl font-bold text-center mb-4 font-mono text-white">Grand Children</h2>
      <div className='flex justify-around border-t-2 border-white border-opacity-30 pt-4'>
        <div className='text-center'>
          <h1 className='font-semibold text-xl font-mono text-white'>Alive</h1>
          <h3 className='text-3xl font-bold text-white'>67</h3>
        </div>
        <div className='h-16 w-0.5 bg-white bg-opacity-30'></div>
        <div className='text-center'>
          <h1 className='font-semibold text-xl font-mono text-white'>Deceased</h1>
          <h3 className='text-3xl font-bold text-white'>27</h3>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-gradient-to-br from-purple-800  to-red-500 p-4 rounded-xl shadow-lg max-w-sm">
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4">
      <h2 className="text-xl font-bold text-center mb-4 font-mono text-white">Great Grand Children</h2>
      <div className='flex justify-around border-t-2 border-white border-opacity-30 pt-4'>
        <div className='text-center'>
          <h1 className='font-semibold text-xl font-mono text-white'>Alive</h1>
          <h3 className='text-3xl font-bold text-white'>67</h3>
        </div>
        <div className='h-16 w-0.5 bg-white bg-opacity-30'></div>
        <div className='text-center'>
          <h1 className='font-semibold text-xl font-mono text-white'>Deceased</h1>
          <h3 className='text-3xl font-bold text-white'>27</h3>
        </div>
      </div>
    </div>
  </div>


  </div>
  )
}

export default Home