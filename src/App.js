import React from 'react';
import GroceryItems from './grocery-list/grocery';
import Header from './Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <GroceryItems />
    </div>
  );
}

export default App;
