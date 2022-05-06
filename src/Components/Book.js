import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, author } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <div>{author}</div>
        <button type="button">Remove</button>
      </div>
    );
  }
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
