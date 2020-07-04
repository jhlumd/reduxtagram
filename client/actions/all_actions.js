export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export function increment(postIdx) {
  // console.log(this);
  return {
    type: INCREMENT_LIKES,
    postIdx
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function removeComment(comment) {
  return {
    type: REMOVE_COMMENT,
    comment,
  };
}
