import React from 'react';
import './App.css';
import GenerationButton from './GenerationButton';

// TODO: set this in local storage at webapp startup
const settings = {
  firstname: "Prénom",
  lastname: "Nom",
  birthday: "DD/MM/YYYY",
  placeofbirth: "???",
  address: "1 rue Lepic",
  city: "Paris",
  zipcode: "75001"
};


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      data: {},
      loading: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Générer une attestation pour...
          </p>
          <GenerationButton userSettings={settings} reason="sport_animaux" label="Se promener"></GenerationButton>
          <GenerationButton userSettings={settings} reason="travail" label="Se rendre au travail"></GenerationButton>
          <GenerationButton userSettings={settings} reason="achats" label="Faire des achats"></GenerationButton>
          <GenerationButton userSettings={settings} reason="sante" label="Se rendre à un RDV médical"></GenerationButton>
        </header>
      </div>
    );
  }

}

  export default App;
