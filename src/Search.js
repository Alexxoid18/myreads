import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
	
  render() {
    
    const { searchQuery } = this.props
   
    if (searchQuery) {
      const match = new RegExp(escapeRegExp(searchQuery), 'i')
    }
   
		return (
			<div className="search-books">
                     
            <div className="search-books-bar">
                           
              <Link className="close-search" 
                to="/"  
              >Close
              </Link>
             
              <div className="search-books-input-wrapper">
                
              <input 
                type="text" 
                placeholder="Search by title or author" 
                value = {searchQuery}
                onChange = {(event) => this.props.onChangeSearch(event.target.value)}
              />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { this.props.searchedBooks.map(searchedBook => (
                  <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    onChangeShelf={this.props.onChangeShelf}
                  />  
                  </li>
                ))}
              </ol>
            </div>
          </div>
		)
	}
}

export default Search
