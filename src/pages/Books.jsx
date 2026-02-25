import React, { useState } from "react";
// import { books } from '../data'
import Book from "../components/ul/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks() {
    console.log('filter')
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={filterBooks}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="Low_to_High">Price, Low to High</option>
                  <option value="High_to_Low">Price, High to Low</option>
                  <option value="Rating">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
