import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {Books} from '@nxnickan/books/ui';
import {IBook} from "@nxnickan/shared-models";
import {getBooks} from '@nxnickan/books/data-access';
import {cartActions} from "@nxnickan/cart/data-access";

export const BooksFeature = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <>
      <h2>Books</h2>
      <Books
        books={books}
        onAdd={(book) =>
          // Using add action from cart slice
          dispatch(
            cartActions.add({
              id: book.id,
              description: book.title,
              cost: book.price,
            })
          )
        }
      />
    </>
  );
};


export default BooksFeature;
