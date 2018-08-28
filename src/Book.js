import React from 'react'

function Book (props) {

  	// Correct display of books without thumbnails in search
    const thumbnail = props.book.imageLinks ?  props.book.imageLinks.thumbnail : ''

		return (
			<div className="book">
            	<div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select  onChange={(e) => props.onChangeShelf(props.book, e.target.value)} value={props.book.shelf ? props.book.shelf : 'none'} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
            	<div className="book-title">
            		{props.book.title}
            	</div>
            	<div className="book-authors">
            		{`${props.book.authors}`}
            	</div>
      </div>
		)
}

export default Book