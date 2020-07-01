export default function commentsReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState;

  console.log(oldState, action);

  newState = Object.assign({}, oldState);
  return newState;
}
