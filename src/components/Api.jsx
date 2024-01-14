import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
//import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageApi extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=cat&page=1&key=34983998-155dfb76bac09cdf48f99cd2f&q=${nextName}&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No mame ${nextName}`));
        })

        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { status, image } = this.state;
    if (status === 'idle') {
      return <div>Enter data for search</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'resolved') {
      return <ImageGalleryItem image={image} />;
    }
  }
}
