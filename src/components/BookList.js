import React from 'react';
import Book from './Book';

const BookList = ({ books, handleBookClick }) => {
  return (
    <div className="books-container">
      {books.map(book => (
        <Book key={book.id} book={book} handleBookClick={handleBookClick} />
      ))}
    </div>
  );
};

export default BookList;
