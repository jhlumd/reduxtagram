import React from "react";
import Comment from "./comment";
import CommentForm from "./comment_form";

export default function CommentsIndex({ comments }) {
  return (
    <div className="comments">
      {comments.map((comment, idx) => (
        <Comment key={idx} comment={comment} />
      ))}
      <CommentForm />
    </div>
  );
}
