var React = require('react');

var CommentStore = require('../stores/comment-store');

function getStateFromStore() {
	return {
		comments: CommentStore.getAll()
	};
}

var Comments = React.createClass({

	onChange: function () {
		this.setState(getStateFromStore());
	},

	// think of functions as values
	getInitialState: getStateFromStore,

	componentDidMount: function () {
		CommentStore.addChangeListener(this.onChange);
	},

	componentWillMount: function () {
		CommentStore.removeChangeListener(this.onChange);
	},

  render: function() {
		var comments = this.state.comments.map(function (comment, index) {
			return (
					<div className='comment' key={'comment-' + index}>
						{comment.text}
					</div>
			)
		});

		return (
				<div className='comments'>
					{comments}
				</div>
		);
  }
});

module.exports = Comments;
