import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/App.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App;
