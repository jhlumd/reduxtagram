import React from "react";
import Comment from "./comment";
import CommentForm from "./comment_form";

export default function CommentsIndex({ comments, postId, addComment, removeComment }) {
  return (
    <div className="comments">
      {comments.map((comment, idx) => (
        <Comment
          key={idx}
          comment={comment}
          postId={postId}
          idx={idx}
          removeComment={removeComment}
        />
      ))}
      <CommentForm postId={postId} addComment={addComment} />
    </div>
  );
}
