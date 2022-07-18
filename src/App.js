import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes, Route } from 'react-router-dom';

import "./App.css"
import Home from './pages/Home';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import AlertModal from './components/modals/AlertModal';
import Order from './pages/Order';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/orders" element={<Order />}></Route>
      </Routes>
      <FooterComponent />
      <AlertModal />
    </>
  );
}

export default App;
