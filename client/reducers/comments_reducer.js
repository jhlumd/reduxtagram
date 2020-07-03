export default function commentsReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState;

  console.log("In the comments reducer");
  console.log(oldState, action);

  newState = Object.assign({}, oldState);
  return newState;
}
