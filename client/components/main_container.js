import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, addComment, removeComment } from "../actions/all_actions";
import Main from "./main";

const mstp = (state) => {
  return state;
};

const mdtp = (dispatch) => ({
  increment: (postIdx) => dispatch(increment(postIdx)),
  addComment: (comment) => dispatch(addComment(comment)),
  removeComment: (comment) => dispatch(removeComment(comment)),
});

export default connect(mstp, mdtp)(Main);
