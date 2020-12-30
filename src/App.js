import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import BookList from './Components/Books/BookList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: 'all',
      bookType: 'no-filter',
      bookResults: [],
      err: 'null',
    }
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm
    })
    console.log(searchTerm)
  }

  setPrintType(printType){
    this.setState({
      printType
    })
  }

  setBookType(bookType){
    this.setState({
      bookType
    })
  }

  handleSubmit(event){
    event.preventDefault();
    let filter = (this.state.bookType!=="no-filter")? ("&filter="+this.state.bookType):"";
    let key = 'AIzaSyBkfTd8fbIckRuwUBQyCpv3UN1RZgMsol8';
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}${filter}&key=${key}`;
    
    fetch(url)
      .then(response => {
        if(response.ok){
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          bookResults: responseJson.items
        });
      })
      .catch(error => {
        this.setState({
          err: error.message
        });
      })
  }

  render() {
    console.log(this.state);
    return (
      <main className='app'>
        <h1>Google Books Search</h1>
        <Search handleSubmit={e => this.handleSubmit(e)} setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)} setPrintType={printType => this.setPrintType(printType)} setBookType={bookType => this.setBookType(bookType)} />
        <BookList bookResults={this.state.bookResults} />
      </main>
    )
  }
}

export default App;