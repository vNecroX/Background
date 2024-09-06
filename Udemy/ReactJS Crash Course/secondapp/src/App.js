import React from "react";
import './App.css';
import Home from './Components/Home';
import Header from "./Components/Header";
import About from "./Components/About";
import Errorpage from "./Components/Errorpage";
import { Routes, Route } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'

const array = [
  {
    name: "Esteban",
    expertise: "Software Engineer",
    experience: "8 years"
  },
  {
    name: "I",
    expertise: "Mechanical Engineer",
    experience: "9 years"
  },
  {
    name: "O",
    expertise: "Industrial Engineer",
    experience: "7 years"
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Home />
            </> 
          } />

        <Route 
          path="/about" 
          element={
            <>
              <Header />
              <About />
            </>
          } />

        <Route
          path="*"
          element={
            <>
              <Errorpage />
            </>
          }
        />
      </Routes>

      <h1>Test information</h1>
      <div>
        {array.map((element, index) => (
          <h1 key={index}>{element.name}, {element.expertise}, {element.experience}</h1>
        ))}
      </div>

      <EmailIcon />
      <AppSettingsAltIcon />
    </>
  );
}

export default App;
