import React from 'react';
import Book from './Book.js';
import './BookList.css';

const BookList = (props) => {
  const books = props.data.map((book, index) => {
    return (
      <Book
        author={book.author}
        title={book.title}
        type={book.type}
        image={book.image}
        key={index}
      />
    )
  })

  return(
    <div className="ui wide grid">
      {books}
    </div>
  )
}

export default BookList;
