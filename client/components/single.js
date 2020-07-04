import React from "react";
import Photo from "./photo";
import CommentsIndex from "./comments_index";

export default function Single({ posts, params, comments, increment }) {
  const postIdx = posts.findIndex((post) => post.code === params.postId);
  const post = posts[postIdx];  

  return (
    <div className="single-photo">
      <Photo
        post={post}
        idx={postIdx}
        comments={comments}
        increment={increment}
      />
      <CommentsIndex />
    </div>
  );
}
