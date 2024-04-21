import React from 'react'

const Movies = () => {
  return (
    <div>
    <div className='text-2xl font-bold text-center m-8'>Trending Movies</div>

    <div className='flex'>

          <div className='w-[160px] h-[30vh] bg-center bg-cover m-4 md:h-[40vh] md:w-[180px] relative rounded-xl hover:scale-110 duration-300 flex items-end'
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
              }}
          >
          </div>

          <div className='w-[160px] h-[30vh] bg-center bg-cover m-4 md:h-[40vh] md:w-[180px] relative rounded-xl hover:scale-110 duration-300 flex items-end'
            style={{
                backgroundImage: `url(https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
              }}
          >
          </div>

          

     </div>
    
  </div>

  )
}

export default Movies