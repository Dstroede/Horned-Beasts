//1. import react
import React from 'react';
// import component form files I want to use in the App
import Gallery from './Gallery.js';
import Header from './Header.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import beastData from './data.json';
import Form from'react-bootstrap/Form';

//2. declare the class
class App extends React.Component {

  constructor(props){
    super(props);
    this.state= {
    beast:{},
    showModal: false,
    filteredBeastData: beastData
  }
}

showBeastModal = () => this.setState({showModal: true})
hideBeastModal = () => this.setState({showModal: false})

setSelectBeast = (beast) => this.setState({beast: beast}, () => console.log(this.state.beast))

updateFilteredData = (e) => {
  let totalHorns = e.target.value;
  if(totalHorns === '-1'){
    this.setState({filteredBeastData: beastData})
  }
  else {
    let updatedHorns = beastData.filter(
      (beast) => {
        console.log(beast.horns, totalHorns, 'Every beast has a value of 1')
       return beast.horns.toString() === totalHorns});
      
    this.setState({filteredBeastData: updatedHorns})
    console.log(updatedHorns);
  }
}

render () {
  return (
  <>
  <Header/>
  <Form onChange={this.updateFilteredData}>
    <Form.Group>
      <Form.Select style={{ width: '15rem', margin: '5px', float: 'right'}}>
        <option value = {-1}> Filter By Horns </option>
        <option value = {1}> 1 Horn </option>
        <option value = {2}> 2 Horns </option>
        <option value = {3}> 3 Horns </option>
        <option value = {100}> 100 Horns </option>
      </Form.Select>
    </Form.Group>
    </Form>
  <Gallery
  beastData={this.state.filteredBeastData}
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