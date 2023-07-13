import React , { Component } from 'react';
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'

export default class App extends Component{
  state={
    imgName:''
  }
  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  render(){
    return(
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery imgName={this.state.imgName}></ImageGallery>
      </>
    )
  }
}
