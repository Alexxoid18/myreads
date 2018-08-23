import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import Search from './Search'
import Main from './Main'


class BooksApp extends Component {

  state = {
    showSearchPage: true,
    books: [] 
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

 /* changeShelf = () => {
      this.setState(() => ({
  
      }))
    }

    handleChange = (event) => {
      this.setState({shelf: event.target.value})
    }

   
 */

  render() {
   // console.log(this.state.books)
    return (
      <div className="app">
        <Main  
          books = {this.state.books} 
        />
      </div>
           
    )
  }
}

export default BooksApp
