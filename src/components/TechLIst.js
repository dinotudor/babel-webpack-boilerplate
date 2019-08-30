import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['Node.js', 'React.js', 'React Native']
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.newTech);
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.newTech}</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default TechList;
