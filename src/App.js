import './App.css'
import React from 'react';
// import Home from './components/Home';
import Page from './components/Page';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <>
      <div >
      <Routes>
        <Route path='/' element={<Header/>}/>
        {/* <Route path="/home" element={ <Home/> } /> */}
        <Route path="nextpage/:id" element={ <Page/> } />
      </Routes>
    </div>
      </>
    );
  }
}
export default App




