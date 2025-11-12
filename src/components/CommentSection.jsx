import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = ({ postId, postSlug }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    // In a real application, you would send this to a backend API
    // For now, we'll just add it to the local state
    const newComment = {
      id: Date.now(),
      name,
      email,
      comment,
      date: new Date().toISOString(),
      postId,
    };

    // Simulate API call
    setTimeout(() => {
      setComments([newComment, ...comments]);
      setName('');
      setEmail('');
      setComment('');
      setIsSubmitting(false);
      alert('Comment submitted successfully! (This is a demo - comments are stored locally)');
    }, 500);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section className="comment-section">
      <h2>Comments</h2>
      <p className="comment-count">
        {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
      </p>

      {/* Comment Form */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Comment *</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows="5"
            placeholder="Write your comment here..."
          ></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Post Comment'}
        </button>
      </form>

      {/* Comments List */}
      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="no-comments">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <strong className="comment-author">{comment.name}</strong>
                <span className="comment-date">{formatDate(comment.date)}</span>
              </div>
              <div className="comment-body">
                <p>{comment.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;

