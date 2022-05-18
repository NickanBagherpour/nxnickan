import {Route, Link, Navigate, Routes} from 'react-router-dom';

import {BooksFeature} from '@nxnickan/books/feature';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@nxnickan/ui';

import {CartFeature} from '@nxnickan/cart/feature';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
            <Link to="/feature">CartFeature</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
          <Route path="/"
                 element={<Navigate to="/books"/>}
          >
          </Route>
          <Route
            path="/books"
            element={<BooksFeature/>}
          />
          <Route
            path="/cart"
            element={<CartFeature/>}
          />
        </Routes>
      </Main>
    </>
  );
}

export default App;
