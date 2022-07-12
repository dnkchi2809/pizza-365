import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ContentComponent from './components/content/ContentComponent';
import AlertModal from './components/modals/AlertModal';

import "./App.css"

function App() {
  return (
    <div>
      <div className="container" id="topPage">
        <HeaderComponent/>
        <ContentComponent/>
        <AlertModal/>
      </div>
      
      <FooterComponent />
    </div>
  );
}

export default App;
