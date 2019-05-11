import React, {Component} from 'react';

class BookSelect extends Component{

  constructor(props){
    super(props)
    this.state = {
      selectedBookIndex: 0
    }
    this.handleSelectedBookChange = this.handleSelectedBookChange.bind(this)
  }

  handleSelectedBookChange(evt) {
    this.setState({selectedBookIndex: evt.target.value});
    this.props.handleSelectedBook(evt.target.value);
  }

  createDropdown() {
    return this.props.bookList.map((book, index) => {
      return <option className="ui dropdown" value={index} key={index}>{book.author}</option>
    });
  }

  render() {
    return (
      <select value={this.state.selectedBookIndex} onChange={this.handleSelectedBookChange}>
        {this.createDropdown()}
      </select>
    )
  }

}

export default BookSelect;
