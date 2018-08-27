import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import Search from './Search'
import Main from './Main'


class BooksApp extends Component {

  state = {
    books: [],
    query: '',
    searchedBooks: []
}
    


componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

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

handleChange = (query) => {
    this.setState({ query: query})
    this.getSearchResults(query)
}
    
getSearchResults = (query) => {
	if (query) {
	BooksAPI.search(query).then((searchedBooks) => {
		this.setState({ searchedBooks: searchedBooks})
	})
	} else {
		this.setState({ searchedBooks: []})
	} 
}
  
render() {
   // console.log(this.state.books)
    return (
      <div className="app">
	    <Route exact path="/" render={() => (
	    	<Main  
				books = {this.state.books} 
         		onChangeShelf = {this.changeShelf}
            />
	    )}/>
        
        
        <Route path="/search" render={() => (
        	<Search
           		searchQuery = {this.state.query}
           		searchedBooks = {this.state.searchedBooks}
           		books = {this.state.books} 
        		onChangeSearch = {this.handleChange}
        		onChangeShelf = {this.changeShelf}

         	/>

        )}/>       
       
      </div>
           
    )
  }
}

export default BooksApp
