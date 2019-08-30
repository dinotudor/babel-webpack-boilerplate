import React, { Component } from 'react';

import TechItem from './TechItem';

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

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <>
        <h1>{this.state.newTech}</h1>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
            ))}
            <TechItem />
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
