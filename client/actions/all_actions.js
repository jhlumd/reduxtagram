export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export function increment(postIdx) {
  return {
    type: INCREMENT_LIKES,
    postIdx
  };
}

export function addComment(commentData) {
  return {
    type: ADD_COMMENT,
    commentData,
  };
}

export function removeComment(postId, idx) {
  return {
    type: REMOVE_COMMENT,
    postId,
    idx,
  };
}
