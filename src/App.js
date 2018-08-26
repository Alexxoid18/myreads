import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import Search from './Search'
import Main from './Main'


class BooksApp extends Component {

  state = {
    showSearchPage: false,
    books: [],
    query: {}

  }
    


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });

  }
  
  changeShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(() => {
      this.setState({ books: this.state.books
      .filter(item => item.id !== book.id)
      .concat([book])})
    }
    )
  }

  updateQuery = (event) => {
  	this.setState({ query: event.target.value })
  }

/*
  updateQuery = (query) => {
  	this.setState({ query: query})
  }
 */ 

  render() {
   // console.log(this.state.books)
    return (
      <div className="app">
	    {this.state.showSearchPage === false && (
        <Main  
          books = {this.state.books} 
          onChangeShelf = {this.changeShelf}
          onNavigate = {() => {
        	this.setState({ showSearchPage: true })
          }}
        />
        )}
        
        {this.state.showSearchPage === true && (
        <Search
        	
        	searchQuery = {this.state.query}
        	updateQuery={this.updateQuery}
        />
        )}
      </div>
           
    )
  }
}

export default BooksApp
