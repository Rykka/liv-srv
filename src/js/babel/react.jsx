var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox" style={{backgroundColor:'#ADBDCC'}}>
        Hello React
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.querySelector('.react')
);
