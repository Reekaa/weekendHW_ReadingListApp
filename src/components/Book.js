import React from 'react';
import './Book.css';

const Book = (props) => {
  return (
    <div className="ui raised purple three stackable card">
      <div className="ui image">
        <img src={props.image} alt='book' width='100' height="100"/>
      </div>
      <div className="content">
        <h3 className="author">Author: {props.author}</h3>
        <p className="title">Title: {props.title}</p>
        <p className="type">Type: {props.type}</p>
      </div>
    </div>
  )
}

export default Book;
