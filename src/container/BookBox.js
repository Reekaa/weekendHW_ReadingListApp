import React, {Component} from 'react';
import bookData from '../data/BookData.js'
import BookList from '../components/BookList.js';
import BookForm from '../components/BookForm.js';
import SearchField from 'react-search-field';
import './BookBox.css';

class BookBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      bookList: bookData,
      selectedBookIndex: null
    };
    this.handleBookSubmit = this.handleBookSubmit.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  handleBookSubmit(newBooks){
      const updateBooks = [...this.state.bookList, newBooks]
      this.setState({bookList: updateBooks})
  }

  handleSelectedBook(index){
      this.setState({selectedBookIndex: this.state.bookList[index]});
  }

  onSearchChange(text){
    console.log(text);
    var index;
    for (index = 0; index < this.state.bookList.length; index++) {
      if (this.state.bookList[index].author.includes(text)) {
        this.setState({selectedBookIndex: index});
        return
      }
    }
    return this.state.selectedBookIndex;
    this.setState({selectedBookIndex: null});
  }

  render(){
    return(
      <div>
        <h1>Reading list</h1>
        <img id="header" src="/images/book.jpeg"/>
        <h3>Add new Book to the list</h3>
        <br></br>
        <BookForm handleBookSubmit={this.handleBookSubmit}/>
        <div className="ui horizonal divider"></div>
          <BookList data={this.state.bookList}/>
        </div>
    )
  }

}

export default BookBox;
