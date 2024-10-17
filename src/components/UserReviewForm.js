import './css/UserReview.css';
import React from 'react';
import Starrate from './starrate.js';

function UserReviewForm() {
  return (
    <div id="Main">
      <div className="RateStars">
        <h1>Rate your experience</h1>

      </div>
      <div className='TextArea'>
        <div className='container'>
          <Starrate />
          <h2 className='FeedbackName'>Feedback</h2>
          <textarea id="Feedback" className='submit' >
            We'd love to hear your suggestions
          </textarea>
          <div id='Submit'>
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
