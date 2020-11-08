import React from 'react';
import './App.css';
import GenerationButton from './GenerationButton';
import UserForm from './UserForm';

const userSettingKey = "userSettings";

class App extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const userSettings = localStorage.getItem(userSettingKey);
    if (userSettings) {
      this.setState({
        userSettings: JSON.parse(userSettings),
        userSettingsLoaded: true
      });
    } else {
      this.setState({
        userSettings: null,
        userSettingsLoaded: false
      });
    }
  }

  storeSettings = (settings) => {
    localStorage.setItem(userSettingKey, JSON.stringify(settings));
    this.setState({
      userSettings: settings,
      userSettingsLoaded: true
    });
  }

  resetSettings = () => {
    this.setState({
      userSettingsLoaded: false
    });
  }

  getFormOrGenerationButtons() {
    if (!this.state.userSettingsLoaded)
      return (
        <header className="App-header">
          <UserForm initialSettings={this.state.userSettings} onSubmit={(s) => this.storeSettings(s)}></UserForm>
        </header>);
    else {
      const settings = this.state.userSettings;
      return (
        <header className="App-header">
          <p>Générer une attestation pour...</p>
          <GenerationButton userSettings={settings} reason="sport_animaux" label="Se promener"></GenerationButton>
          <GenerationButton userSettings={settings} reason="travail" label="Se rendre au travail"></GenerationButton>
          <GenerationButton userSettings={settings} reason="achats" label="Faire des achats"></GenerationButton>
          <GenerationButton userSettings={settings} reason="sante" label="Se rendre à un RDV médical"></GenerationButton>
          <button className="Update-settings" onClick={() => this.resetSettings()}>Paramètres</button>
        </header>)
    }
  }

  render() {
    return (
      <div className="App">
        {this.getFormOrGenerationButtons()}
      </div>
    );
  }

}

export default App;
