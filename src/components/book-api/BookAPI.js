import React, { Component } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';

class BookAPI extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    )
  }
}

export default BookAPI;
