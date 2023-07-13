import css from "./Modal.module.css"
import React, { Component } from 'react'

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.clickEscape);
    };
    componentWillUnmount() {
        window.removeEventListener('keydown', this.clickEscape);
    };
    clickEscape = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    };
    backdropeClick = e => {
          if (e.target === e.currentTarget) {
              this.props.onClose()
          }
    };
    


  render() {
    return (
      <div className={css.Overlay} onClick={this.backdropeClick} >
        <img src={this.props.imgBigSrc} alt={this.props.imgTag} className={css.Modal}/>
     </div>
    )
  }
}