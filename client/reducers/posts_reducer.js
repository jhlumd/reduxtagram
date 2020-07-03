import { INCREMENT_LIKES } from "../actions/all_actions";

export default function postsReducer(oldState = [], { type }) {
  // Object.freeze(oldState);

  switch (type) {
    case INCREMENT_LIKES:
      console.log("In the posts reducer");
      console.log(oldState, { type });
      return oldState;
  
    default:
      return oldState;
  }
}
