import React, { Component } from 'react';
import { SearchBar } from './Searchbar';
//import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageApi } from './Api';

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
        <ImageApi imageName={this.state.imageName} />
      </>
    );
  }
}
