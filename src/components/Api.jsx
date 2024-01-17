import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { LoadMoreButton } from './Button';
import searchApi from '../services/searchApi';
import { animateScroll } from 'react-scroll';
//import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageApi extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    //const { currentPage } = this.state;
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const page = this.state.currentPage;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      searchApi
        .fetchApi(nextName, page)
        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
    console.log('click');
    console.log(this.state.currentPage);
    // this.scrollOnMoreButton();
  };

  scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  render() {
    const { status, image, currentPage } = this.state;
    if (status === 'idle') {
      return <div>Enter data for search</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery image={image} />
          <LoadMoreButton onClick={this.loadMore} page={currentPage} />
        </>
      );
    }
  }
}
