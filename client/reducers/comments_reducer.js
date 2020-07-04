import { ADD_COMMENT, REMOVE_COMMENT } from "../actions/all_actions";

export default function commentsReducer(oldState = {}, action) {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case ADD_COMMENT:
      console.log("Adding a comment");
      newState = Object.assign({}, oldState);
      const { postId, author, comment } = action.commentData;
      
      if (newState[postId]) {
        newState[postId].push({ text: comment, user: author });
      } else {
        newState[postId] = [{ text: comment, user: author }];
      }

      return newState;

    case REMOVE_COMMENT:
      console.log("Removing a comment");
      newState = Object.assign({}, oldState);

      console.log(newState);

      return newState;

    default:
      return oldState;
  }
}
