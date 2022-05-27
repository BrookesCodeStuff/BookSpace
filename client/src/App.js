import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache,ApolloProvider, createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AppNavbar from './components/Navbar';
import SearchBooks from './pages/SearchBooks';
import HaveRead from './pages/HaveRead';
import WantToRead from './pages/WantToRead';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
       <AppNavbar />
        <Routes>
        <Route path='/' element={<SearchBooks/>} />
        <Route path='/want' element={<WantToRead/>} />
        <Route path='/have' element={<HaveRead/>} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;