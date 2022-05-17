import {Route, Link, Navigate, Routes} from 'react-router-dom';

import {BooksFeature} from '@nxnickan/books/feature';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
} from '@nxnickan/ui';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/books'/>}/>
          <Route path="/books" element={<BooksFeature/>}/>
        </Routes>
      </Main>
    </>

  );
}

export default App;
