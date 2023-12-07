import React, { useState } from 'react';
const CommentForm = ({ blogId, onSubmitComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Now you can send the blogId and the comment data to the parent component
    onSubmitComment({ blogId, comment });
  };

  return (
    <div className="col-12 mt-1">
      <h6 className="section-label mt-25">Leave a Comment</h6>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="form">
            <div className="row">
              <div className="col-12">
                <textarea
                  className="form-control mb-2"
                  rows="4"
                  placeholder="Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
