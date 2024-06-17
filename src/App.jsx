import React from 'react';

import Header from './components/main/Header';
import WelcomeBlock from './components/helpers/landing/WelcomeBlock';
import LastBuyers from './components/helpers/landing/LastBuyers';
import Footer from './components/main/Footer';

import './../src/styles/main.css';
import ProductContainer from './components/helpers/landing/ProductContainer';


const App = () => {
  return (
    <>
      <Header />
      <WelcomeBlock />
      <LastBuyers />
      <ProductContainer />
      <Footer />
    </>
  )
}

export default App;
