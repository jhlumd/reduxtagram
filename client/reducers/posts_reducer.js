export default function postsReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState;

  newState = Object.assign({}, oldState);
  return newState;
}
