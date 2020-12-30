import React from 'react';
import './BookList.css';
import Book from './Book';

function BookList(props) {
    console.log(props);
    return (
        <ul className='bookmarkList'>
            { props.bookResults.map((book) =>
                <Book
                    key={book.etag}
                    title={book.volumeInfo.title}
                    img={book.volumeInfo.imageLinks?.thumbnail}
                    author={book.volumeInfo.author}
                    description={book.volumeInfo.description} />
                )
            }
        </ul>
    );
}

export default BookList;