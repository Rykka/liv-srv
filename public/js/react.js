"use strict";

var CommentBox = React.createClass({
  displayName: "CommentBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "commentBox" },
      "Hello React"
    );
  }
});

ReactDOM.render(React.createElement(CommentBox, null), document.querySelector('.react'));