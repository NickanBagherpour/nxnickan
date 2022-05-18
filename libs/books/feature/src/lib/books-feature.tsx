import {useEffect, useState} from 'react';

import {getBooks} from '@nxnickan/books/data-access';
import {Books} from '@nxnickan/books/ui';

export const BooksFeature = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books books={books}/>
    </>
  );
};


export default BooksFeature;
