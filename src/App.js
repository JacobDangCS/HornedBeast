import './App.css';
import Header from './Components/Header.js'
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SelectedBeast from './Components/SelectedBeast.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chosenBeast: null,
      showModal: false,
      hornAmount: 'All'
    }
  };

  selectBeast = (hBeast) => {
    this.setState({
      chosenBeast: hBeast
    })
    this.openModal()
  }

  openModal = () => { this.setState({ showModal: true }) }
  closeModal = () => { this.setState({ showModal: false }) }


  hornChoice = (choice) => {
    this.setState({
      hornAmount: choice
    })
  }


  render() {
    return (
      <>
        <Header
          hornChoice={this.hornChoice} />

        <Main
          selectBeast={this.selectBeast}
          hornAmount={this.state.hornAmount}
        />

        <Footer />

        {
          this.state.chosenBeast &&
          <SelectedBeast
            modalState={this.state.showModal}
            handleClose={this.closeModal}
            beastData={this.state.chosenBeast}
          />
        }
      </>
    );
  }
}

export default App;
