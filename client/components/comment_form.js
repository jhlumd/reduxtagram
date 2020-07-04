import React, { Component } from "react";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const postId = this.props.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment({ postId, author, comment });
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <form
        ref="commentForm"
        className="comment-form"
        onSubmit={this.handleSubmit}
      >
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    );
  }
}
