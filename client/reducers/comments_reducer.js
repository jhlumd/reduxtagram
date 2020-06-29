export default function commentsReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState;

  newState = Object.assign({}, oldState);
  return newState;
}
