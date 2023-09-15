//1. import react
import React from 'react';
// import component form files I want to use in the App
import Gallery from './Gallery.js';
import Header from './Header.js';
import Footer from './Footer.js';


//2. declare the class
class App extends React.Component {

render () {
  return (
  <>
  <Header/>
  <Gallery/>
  <Footer/>
  </>
  )
}

};

//3. export the class
export default App;
