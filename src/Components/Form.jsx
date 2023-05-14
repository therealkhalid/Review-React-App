import React from 'react'
import { Rating } from 'react-simple-star-rating'
import {v4 as uuidv4} from 'uuid'

function Form({addReview}) {
    const[name,setName]=React.useState('');
    const[prenom,setPrenom]=React.useState('');
    const[message,setMessage]=React.useState('');
    const [rating, setRating] =React.useState(0);
    const handleRating = (rate) => {
        setRating(rate)
    }


    const SubmitForm=(e)=>{
        e.preventDefault()
        const review={
            id:uuidv4(),
            name,
            prenom,
            message,
            rating:rating
        }
        addReview(review);
        setName('');
        setPrenom('');
        setMessage('');
        setRating(0);
    }
    const Disabled=()=>{
        if(!name||!prenom||!message||!rating>0){
            return true
        }
    }
  return (
    <form className='container-fluide' onSubmit={(e)=>SubmitForm(e)}>
        <div className="mb-3">
        <label htmlFor="txtName" className="form-label">First name:</label>
        <input type="text"
        className="form-control"
        id="txtName"
        name='name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Your Name"/>
        </div>
        <div className="mb-3">
        <label htmlFor="txtPrenom" className="form-label">Last Name:</label>
        <input type="text"
        className="form-control "
        id="txtPrenom"
        name='prenom'
        value={prenom}
        onChange={(e)=>setPrenom(e.target.value)}
        placeholder="Your Last Name"/>
        </div>
        <div className="mb-3">
        <label htmlFor="txtMessage" className="form-label">Message:</label>
        <textarea className="form-control"
         id="txtMessage"
         name='message'
         value={message}
         placeholder='Your Message'
         onChange={(e)=>setMessage(e.target.value)}
         rows="3"></textarea>
        </div>
        <div className='mb-3'>
         <Rating
         onClick={handleRating}/>
         </div>
        <div className="mb-3">
        <button className="btn btn-primary" disabled={Disabled()} type="submit">Public</button>
        </div>
        
    </form>
  )

}
export default Form
