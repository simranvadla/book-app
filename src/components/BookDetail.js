import React from 'react';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className="book-detail">
      <div className="banner">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <div className="details">
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors.join(', ')}</p>
          <button onClick={onClose}>Close</button>
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
      </div>
      <div className="description">
        <h3>Description:</h3>
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
};

export default BookDetail;
