import React, { Component } from 'react'

class Book extends Component {

  	render() {
       
        // Correct display of books without thumbnails in search
        let hasThumbnail = this.props.book.imageLinks;
        if (hasThumbnail) {
            hasThumbnail = this.props.book.imageLinks.thumbnail;
        }
        else {
           hasThumbnail = '' ;
        }

		return (
			<div className="book">
            	<div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${hasThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select  onChange={(e) => this.props.onChangeShelf(this.props.book, e.target.value)} value={this.props.book.shelf ? this.props.book.shelf : 'none'} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
            	<div className="book-title">
            		{this.props.book.title}
            	</div>
            	<div className="book-authors">
            		{this.props.book.authors}
            	</div>
            </div>
		)
	}
}

export default Book