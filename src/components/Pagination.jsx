import React from 'react'


const Pagination = (props) => {
    const {pageNumberProp, onNext, onPrevious}= props
  return (
    
    <div className='flex justify-center'>
            <button onClick={onPrevious} className='m-4 p-2 border-2' >Previous</button>
            <button className='m-4 p-2 border-2' >{pageNumberProp}</button>
            <button onClick={onNext} className='m-4 p-2 border-2' >Next</button> 
    </div>
  )
}

export default Pagination