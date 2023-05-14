import React from 'react';
import { showRating } from './star';

function ReviewItem({review,RemoveReview}) {
  return (
    <li className='list-group-item d-flex justify-content-between align-center'>
        <div className="ms-2 me-auto">
            <div className="div fw-bold">First name: {review.name}</div>
            <div className="div fw-bold">Last name: {review.prenom}</div>
            <div className="div fw-bold">Review Rating: {showRating(review.rating)}</div>
        </div>
        <div className="d-flex flex-column pt-4">
            <button className='btn btn-sm btn-danger' onClick={()=>RemoveReview(review.id)}>
                <i className='bi bi-trash'></i>
            </button>
        </div>

    </li>
  )
}
export default ReviewItem