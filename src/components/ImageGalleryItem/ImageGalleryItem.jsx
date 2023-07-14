import React,{Component} from 'react';
import css from './ImageGalleryItem.module.css'
import Modal from "../Modal/Modal";

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }
    fff = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }));
        console.log('this.state :>> ', this.state);
      };
    render(){
        const { showModal } = this.state
        return(
            <>
                <li className={css.liImg} onClick={this.fff}>
                    <img className={css.img} src={this.props.imagesLink} alt={this.props.imageTag} />
                </li>
                {showModal && <Modal imgBigSrc={this.props.imagesBigLink} imgTag={this.props.imageTag} onClose={this.fff}/>}
            </>
        )
    }
}
