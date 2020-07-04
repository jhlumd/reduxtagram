import React, { Component } from "react";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      comment: null,
    };
  }

  render() {
    return (
      <form ref="commentForm" className="comment-form">
        <input type="text" ref="author" placeholder="author" />
        <input type="text" ref="comment" placeholder="comment" />
        <input type="submit" hidden />
      </form>
    );
  }
}
