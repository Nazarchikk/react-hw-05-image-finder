import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from 'components/Loader/Loader';
import css from './ImageGallery.module.css'


export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    key: '35758610-c07349af20f7ea2483391d0b9',
    page: 1,
    per_page: 12,
    total: 0 
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgName !== this.props.imgName) {
      this.resetState()
      this.setState({ status: 'pending' });
      this.fetch(this.props.imgName)
    }
    if(prevState.page !== this.state.page){
      this.setState({ status: 'pending' });
      this.fetch(this.props.imgName);
    }
}

  fetch = () => {
      setTimeout(() => {
        fetch(
            `https://pixabay.com/api/?q=${this.props.imgName}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
          )
            .then(res => {
              if (res.ok) {
                return res.json();
              }
            })
            .then(images => {
              if (images.hits.length < 1) {
                return Promise.reject(
                  new Error(`Sorry, but there are currently no images for your request
                            ${this.props.imgName}`)
                );
              }
              if(this.state.page > 1){
                return this.setState({
                  images:[...this.state.images,...images.hits],
                  status: 'resolved'
                })
              }
              else {
                  return this.setState({
                      images:images.hits,
                      status: 'resolved',
                      total: images.totalHits,
                  })
              }
            })
            .catch(error => this.setState({ error, status: 'rejected' }))
        },1000)
  }
  resetState = () => {
    this.setState({
      page:1,
      images:[]
    })
  }
  downScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }
  addPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, error, status } = this.state;
    if (status === 'pending') {
      return <div className={css.Loader}><Loader></Loader></div>;
    }
    if (status === 'rejected') {
      return <h1 className={css.error}>{error.message}</h1>;
    }
    if (status === 'resolved') {
        return (
            <>
            <ul className={css.gallery}>
                {images.map(image => (
                <ImageGalleryItem
                    key={image.id} 
                    imagesLink={image.webformatURL} 
                    imagesBigLink={image.largeImageURL} 
                    imageTag={image.tags} 
                ></ImageGalleryItem>
                ))}
            </ul>
            {this.state.total > images.length && (
                <div className={css.loadMore}>
                  <Button ref={this.ref} onClick={this.addPage}></Button>
                </div>
              )}

            </>
      );
    }
  }
}
