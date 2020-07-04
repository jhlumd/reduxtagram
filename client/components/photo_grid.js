import React from "react";
import Photo from "./photo";

export default function PhotoGrid({ posts, comments, increment }) {
  return (
    <div className="photo-grid">
      {posts.map((post, idx) => (
        <Photo
          key={idx}
          post={post}
          idx={idx}
          comments={comments}
          increment={increment}
        />
      ))}
    </div>
  );
}
