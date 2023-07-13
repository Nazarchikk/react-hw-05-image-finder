import React,{Component} from 'react';
import css from './ImageGalleryItem.module.css'
import Modal from "../Modal/Modal";

export default class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }
    toggleModal = () => {
        this.setState(({showModal}) => ({ showModal: !showModal }));
      };
    render(){
        const {imagesLink,imagesBigLink,imageTag} = this.props
        const { showModal } = this.state
        return(
            <>
                <li className={css.liImg}>
                    <img className={css.img} src={imagesLink} alt={imageTag} />
                </li>
                {showModal && <Modal imgBigSrc={imagesBigLink} imgTag={imageTag} onClose={this.toggleModal}></Modal>}
            </>
        )
    }
}
