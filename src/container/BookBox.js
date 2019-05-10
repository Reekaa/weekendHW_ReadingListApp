import React, {Component} from 'react';
import Header from '../components/Header.js';
import bookData from '../data/BookData.js'
import BookList from '../components/BookList.js';
import BookForm from '../components/BookForm.js';

class BookBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      bookList: bookData
    };
    this.handleBookSubmit = this.handleBookSubmit.bind(this)
  }

  handleBookSubmit(newBooks){
      const updateBooks = [...this.state.bookList, newBooks]
      this.setState({bookList: updateBooks})
  }

  

  render(){
    return(
      <div>
        <Header />
        <h3>Add new Book to the list</h3>
        <BookForm handleBookSubmit={this.handleBookSubmit}/>
        <BookList data={this.state.bookList}/>
      </div>
    )
  }

}

export default BookBox;
