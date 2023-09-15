//1. import react
import React from 'react';
// import component form files I want to use in the App
import Gallery from './Gallery.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import beastData from './data.json';

//2. declare the class
class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
    beast:{},
    showModal: false
  }
}

showBeastModal = () => this.setState({showModal: true})
hideBeastModal = () => this.setState({showModal: false})

setSelectBeast = (beast) => this.setState({beast: beast}, () => console.log(this.state.beast))
render () {
  return (
  <>
  <Header/>
  <Gallery
  beastData={beastData}
  setSelectBeast={this.setSelectBeast}
  showBeastModal={this.showBeastModal}
  />
  <Footer/>
  <SelectedBeast
    showModal= {this.state.showModal}
    hideBeastModal ={this.hideBeastModal}
    beast= {this.state.beast}
    />
  </>
  )
}

};

//3. export the class
export default App;
