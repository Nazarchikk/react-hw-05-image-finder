import React, { Component } from 'react'
import css from "./Modal.module.css"


export default class Modal extends Component {
    state = {}
    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown);
      }
      keyDown = e => {
        if (e.code === 'Escape' || e.code === 'Enter') {
            this.props.close();
        }
      };
    
      backdropeClick = e => {
        if (e.target === e.currentTarget) {
            this.props.close();
        }
      };
    
  render() {
    return (
      <div className={css.overlay}  onClick={this.backdropeClick} >
        <img src={this.props.imgBigSrc} alt={this.props.imgTag} className={css.modal}/>
     </div>
    )
  }
}