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

  render() {
    return (
      <>
        <Header />

        <Main
          selectBeast={this.selectBeast}
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
