import React from 'react'
import ReviewItem from './ReviewItem'

function ReviewList({reviews,RemoveReview}) {
  return (
    <ul className='mt-4 list-group'>
         {
          reviews.map((review)=><ReviewItem key={review.id} RemoveReview={RemoveReview} review={review}/>)

         }    
</ul>
  )
}
export default  ReviewList
