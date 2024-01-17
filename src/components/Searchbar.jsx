import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    imageName: '',
    currentPage: 1,
  };

  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageName.trim() === '') {
      alert('Введіть дані для пошуку');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '', currentPage: 1 });
  };

  render() {
    return (
      <header>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}
        >
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            name="imageName"
            value={this.state.imageName}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
