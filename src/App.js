import React from 'react';
import AvergaReating from './Components/AvergaReating';
import Form from './Components/Form';
import Header from './Components/Header';
import ReviewList from './Components/ReviewList';
function App() {
  const[reviews,setReviews]=React.useState([])
  const addReview=(review)=>{
    setReviews([review,...reviews])
  }
  const RemoveReview=(id)=>{
    setReviews(reviews.filter(function(review){
      return review.id !==id
    }))
  }
  return (
    <div className='row my-5'>
    <div className='col-md-8 m-auto'>
      <div className='card'>
        <div className='card-header bg-secondary'><Header/></div>
        <div className='div card-body text-warning bg-dark'>
          <Form addReview={addReview}/>
          <AvergaReating reviews={reviews}/>
          <ReviewList reviews={reviews} RemoveReview={RemoveReview}/>
        </div>

      </div>
    </div>
    
    
    
  
  </div>
  );
}

export default App;
