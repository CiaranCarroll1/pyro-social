import React from 'react';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="w-full h-screen">
        <Navbar />
        <Posts />
      </div>
    </ApolloProvider>
  );
};

export default App;
