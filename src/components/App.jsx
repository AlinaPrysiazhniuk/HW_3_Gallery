import React, { Component } from 'react';
import { SearchBar } from './Searchbar';
//import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageApi } from './Api';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />

        <ImageApi imageName={this.state.imageName} />

        <button typeof="button" onClick={this.toggleModal}>
          Modal
        </button>
        {showModal && (
          <Modal>
            <button typeof="button" onClick={this.toggleModal}>
              Modal
            </button>
          </Modal>
        )}
      </>
    );
  }
}
