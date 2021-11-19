import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import {Shop} from './components/Shop.jsx'
import {ContextProvider} from './context.jsx'
import './app.css';

function App() { 
  return <>
    <Header />
    <ContextProvider>
      <Shop />
    </ContextProvider>
    <Footer />
  </>
}


export {App};