import React from 'react'

const LoadingModal = () => {
  return (
    <div className='fixed gap-4 bg-black/75 flex justify-center flex-col items-center w-full h-screen top-0 left-0 z-50'>
      <div className="flex gap-4">
        <div className="w-10 bg-primary ease-in-out delay- animate-bounce rounded-full aspect-square"></div>
        <div className="w-10 bg-primary ease-in-out delay-75 animate-bounce rounded-full aspect-square"></div>
        <div className="w-10 bg-primary ease-in-out delay-150 animate-bounce rounded-full aspect-square"></div>
      </div>
      <p className="text-white animate-pulse">
      Loading
      </p>
    </div>
  )
}

export default LoadingModal
