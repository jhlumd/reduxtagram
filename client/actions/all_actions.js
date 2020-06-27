export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// likes
export function increment(postId) {
  return {
    type: INCREMENT_LIKES,
    postId
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