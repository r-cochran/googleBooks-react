import React, { Component } from 'react';
import BookResult from "../bookResult/BookResult";
import "./BookResultsList.css";

class BookResultsList extends Component {
  render(){
    const {books} = this.props
    return(
      <div>
        {books.map(book => <BookResult key={book.id} {...book} />)}
      </div>
    )
  }
}

export default BookResultsList;