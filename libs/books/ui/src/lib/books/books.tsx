import styled from 'styled-components';
import {IBook} from "@nxnickan/shared-models";

import { Book } from '../book/book';

export interface BooksProps {
  books: IBook[];
  onAdd: (book: IBook) => void;
}
const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({ books, onAdd }: BooksProps) => {

  return (
    <StyledBooks>
      {books.map(book => (
          // Pass down new callback prop
        <Book key={book.id} book={book} onAdd={onAdd} />
      ))}
    </StyledBooks>
  );
};
export default Books;
