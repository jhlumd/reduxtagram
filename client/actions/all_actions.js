export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// posts likes
export function increment(postIdx) {
  return {
    type: INCREMENT_LIKES,
    postIdx
  };
}

// comments
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