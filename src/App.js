import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks('harry potter');
    fetchBooks('sherlock holmes');
  }, []);

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(prevBooks => [...prevBooks, ...data.items]);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async (query) => {
    if (query.trim() !== '') {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Virtual Bookstore</h1>
        <SearchBar handleSearch={handleSearch} />
      </header>
      <main>
        {selectedBook ? (
          <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
        ) : (
          <BookList books={books} handleBookClick={handleBookClick} />
        )}
      </main>
    </div>
  );
}

export default App;
