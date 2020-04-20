/* eslint-disable react/display-name */
import React from 'react';
import './App.css';

// components
import Layout from './Components/Layout';

export const App = React.memo(() => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
});

export default App;
