import React, {Component} from 'react';

class BookForm extends Component {

  constructor(props){
    super(props)
      this.state = {
        author: '',
        title: '',
        type: '',
        image: '',
      }

  this.handleAuthorChange = this.handleAuthorChange.bind(this);
  this.handleTitleChange = this.handleTitleChange.bind(this);
  this.handleTypeChange = this.handleTypeChange.bind(this);
  this.handleImageChange = this.handleImageChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleAuthorChange(event){
    this.setState({author: event.target.value})
  }

  handleTitleChange(event){
    this.setState({title: event.target.value})
  }

  handleTypeChange(event){
    this.setState({type: event.target.value})
  }

  handleImageChange(event){
    this.setState({image: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const author = this.state.author;
    const title = this.state.title;
    const type = this.state.type;
    const image = this.state.image;
    const newBook = {
      author: author,
      title: title,
      type: type,
      image: image
    };
    this.props.handleBookSubmit(newBook);
    this.setState({
      author: '',
      title: '',
      type: '',
      image:''
    })
  }

  render(){
    return(
    <div className="ui form">
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="four fields">
          <div className="field">
            <input
               type="text"
               placeholder="Author"
               value = {this.state.author}
               onChange={this.handleAuthorChange}
            />
          </div>
          <div className="field">
            <input
               type="text"
               placeholder="Title"
               value = {this.state.title}
               onChange={this.handleTitleChange}
            />
          </div>
          <div className="field">
            <input
               type="text"
               placeholder="Type"
               value = {this.state.type}
               onChange={this.handleTypeChange}
            />
          </div>
          <div className="field">
            <input
               type="text"
               placeholder="Image"
               value = {this.state.image}
               onChange={this.handleImageChange}
            />
          </div>
          <input className="tiny ui button" type="submit" value="Add book"/>
        </div>
      </form>
    </div>
    )
  }

}

export default BookForm;
