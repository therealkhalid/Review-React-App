import React from 'react'

function AvergaReating({reviews}) {

    const calculerAverage=()=>{
      let average=reviews.reduce((total,review)=>{
       return  total+review.rating /reviews.length;
      },0)
      return average

    }
  return (
    <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
            <h4>Reviews: <span className='badge bg-warning text-danger rounded-pill'>{reviews.length}</span></h4>
            <h4>Averge: <span className='badge bg-warning text-danger rounded-pill'>{calculerAverage()}</span></h4>

        </div>

    </div>
  )
}
export default AvergaReating