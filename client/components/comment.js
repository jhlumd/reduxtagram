import React from "react";

export default function Comment({ comment: { user, text }, postId, idx, removeComment }) {
  return (
    <div className="comment">
      <p>
        <strong>{user}</strong>
        {text}
        <button
          className="remove-comment"
          onClick={removeComment.bind(null, postId, idx)}
        >
          &times;
        </button>
      </p>
    </div>
  );
}
