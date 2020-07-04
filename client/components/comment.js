import React from "react";

export default function Comment({ comment: { user, text } }) {
  return (
    <div className="comment">
      <p>
        <strong>{user}</strong>
        {text}
        <button className="remove-comment">&times;</button>
      </p>
    </div>
  );
}
