import './css/UserReview.css';
import React from 'react';
import RevStarrate from './RevFormStar.js';

function UserReviewForm() {
  return (
    <div id="Main">
      <div className="RateStars">

        {/* Title  */}
        <h1 className='RevFormTitle'>Rate your experience</h1> 
      </div>

        {/* Text/User Input  */}
      <div className='TextArea'>

        {/* Toggling of starsRating  */}
        <div className='container'>
          <RevStarrate />
          <h2 className='FeedbackName'>Feedback</h2>
          <textarea id="Feedback" className='submit' >
            We'd love to hear your suggestions
          </textarea>

          {/* Submit Button  */}
          <div id='Submitbutton'>
            <button type="button" id='submit'>
              Submit
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default UserReviewForm;
