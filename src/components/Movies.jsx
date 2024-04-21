import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Movies = () => {

    const [moviesData, setMoviesData] = useState([])

    const getTrendingMoviesData = () => {
        axios
        .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4359166d8b1186f0cef3de2ab79e3ac5`)
        .then(response => {
          setMoviesData(response.data.results)
        })
      }

      useEffect(()=>{
        getTrendingMoviesData()
      },[])

    return (
      <div>
      <div className='text-2xl font-bold text-center m-8'>Trending Movies</div>
  
      <div className='flex flex-wrap'>
  
            {
               moviesData.map(movie=>{

                       return  <div key={movie.id}
                                     className='w-[160px] h-[30vh] bg-center bg-cover m-4 md:h-[40vh] md:w-[180px] relative rounded-xl hover:scale-110 duration-300 flex items-end'
                                    style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
                                    }}
                    
                                >

                                <div className='text-white font-bold text-center w-full bg-gray-900 bg-opacity-60'>
                                                {movie.original_title}
                                </div>



                         </div>

                })
            }    
            
  
  
  
       </div>
  
    </div>
  
    )
  }
  
  export default Movies