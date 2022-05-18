import {useEffect, useState} from 'react';

import {getBooks} from '@nxnickan/books/data-access';
import {Books} from '@nxnickan/books/ui';
import {IBook} from "@nxnickan/shared-models";

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      {/* Pass a stub callback for now */}
      {/* We'll implement this properly in Chapter 4 */}
      <Books books={books} onAdd={book => alert(`Added ${book.title}`)} />
    </>
  );
};


export default BooksFeature;
