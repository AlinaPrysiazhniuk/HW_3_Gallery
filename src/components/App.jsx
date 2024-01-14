import React, { Component } from 'react';
import { SearchBar } from './Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
      </>
    );
  }
}
