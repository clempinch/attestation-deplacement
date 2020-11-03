import React from 'react';
import './UserForm.css';

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      birthday: "",
      placeofbirth: "",
      address: "",
      city: "",
      zipcode: ""
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    this.props.onSubmit(this.getSettingsFromState());
    event.preventDefault();
  }

  getSettingsFromState() {
    return {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      birthday: this.convertDate(this.state.birthday),
      placeofbirth: this.state.placeofbirth,
      address: this.state.address,
      city: this.state.city,
      zipcode: this.state.zipcode
    }
  }

  convertDate(date) {
    // before: YYYY-MM-DD, after: DD/MM/YYYY
    const dateRegex = /([^-]*)-([^-]*)-([^-]*)/;
    var dateRegexResult = date.match(dateRegex);
    return `${dateRegexResult[3]}/${dateRegexResult[2]}/${dateRegexResult[1]}`;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <fieldset>
          <label>
            Prénom :
          <input
              name="firstname"
              type="text"
              placeholder="Jean"
              required
              value={this.state.firstname}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Nom :
          <input
              name="lastname"
              type="text"
              placeholder="Dupont"
              required
              value={this.state.lastname}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Date de naissance :
          <input
              name="birthday"
              type="date"
              required
              value={this.state.birthday}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Ville de naissance :
          <input
              name="placeofbirth"
              type="text"
              placeholder="Paris"
              required
              value={this.state.placeofbirth}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Adresse :
          <input
              name="address"
              type="text"
              placeholder="1 rue Lepic"
              required
              value={this.state.address}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Code postal :
          <input
              name="zipcode"
              type="text"
              placeholder="75000"
              required
              value={this.state.zipcode}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Ville de résidence :
          <input
              name="city"
              type="text"
              placeholder="Paris"
              required
              value={this.state.city}
              onChange={this.handleInputChange} />
          </label>
          <input type="submit" value="Go" className="button" />
        </fieldset>
      </form>
    );
  }

}

export default UserForm;