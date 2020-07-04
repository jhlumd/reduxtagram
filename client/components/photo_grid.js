import React from "react";
import Photo from "./photo";

export default function PhotoGrid({ posts, comments, increment }) {
  return (
    <div className="photo-grid">
      {posts.map((post, idx) => {
        const numComments = comments[post.code]
          ? comments[post.code].length
          : 0;

        return (
          <Photo
            key={idx}
            post={post}
            idx={idx}
            numComments={numComments}
            increment={increment}
          />
        );
      })}
    </div>
  );
}
