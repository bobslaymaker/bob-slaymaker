import React from 'react'

const MyLastFilm = () => {
  return (
    <div className="flex goudy flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="relative w-full max-w-4xl">
        <iframe className='w-full md:h-[500px] h-[300px]' src="https://www.youtube.com/embed/AZZAX1oq86g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default MyLastFilm