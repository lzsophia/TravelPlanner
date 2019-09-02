import React from 'react';
import '../styles/App.css';
import TopNavBar from "./NavBar/TopNavBar"
import Footer from "./Footer"
import MainBody from "./MainBody"

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <MainBody />
      <Footer/>
    </div>
  );
}

export default App;
