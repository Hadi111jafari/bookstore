import React from 'react';
import Books from '../Components/Books';
import AddBook from '../Components/AddBook';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Books />
        <AddBook />
      </div>
    );
  }
}

export default Home;
