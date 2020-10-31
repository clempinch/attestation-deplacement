import React from 'react';
import './App.css';
import pdfBase from './certificate.pdf'
import { generatePdf } from './pdf-util'

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

// TODO: Modify using a radio button
const reason = "sport_animaux";

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
            Generer une attestation de deplacement derogatoire.
          </p>
          <button className="generate" onClick={_ => this.generate()}>Generer</button>
        </header>
      </div>
    );
  }

  async generate() {
    const creationInstant = new Date()
    const creationHour = creationInstant
      .toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const creationDate = creationInstant.toLocaleDateString('fr-FR').replace('_', '/');

    const profile = { ...settings, datesortie: creationDate, heuresortie: creationHour };

    const pdf = await generatePdf(profile, reason, pdfBase);

    this.downloadBlob(pdf, `attestation-${creationInstant.toLocaleDateString('fr-CA')}_${creationHour.replace(':', '-')}.pdf`)
  }

  downloadBlob(blob, fileName) {
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
  }
}

export default App;
