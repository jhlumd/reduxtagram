import { INCREMENT_LIKES } from "../actions/all_actions";

export default function postsReducer(oldState = [], { type, postIdx }) {
  switch (type) {
    case INCREMENT_LIKES:
      console.log("Incrementing likes for postIdx:", postIdx);
      const newState = oldState.slice(0);
      newState[postIdx].likes++;
      return newState;
  
    default:
      return oldState;
  }
}
