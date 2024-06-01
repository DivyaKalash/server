import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect} from "react";
import Signup from './containers/Signup';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/signup" exact element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
