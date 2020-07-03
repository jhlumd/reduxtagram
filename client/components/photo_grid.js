import React from "react";
import Photo from "./photo";

export default function PhotoGrid(props) {
  // console.log(props);

  return (
    <div className="photo-grid">
      {props.posts.map((post, idx) => (
        <Photo
          key={idx}
          post={post}
          idx={idx}
          comments={props.comments}
          increment={props.increment}
        />
      ))}
    </div>
  );
}
