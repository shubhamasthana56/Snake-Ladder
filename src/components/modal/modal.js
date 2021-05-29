import React from 'react';
import Modal from 'react-modal';
import './modal.css';

const ModalDialog = (props) => {
    return <div>
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
        >
            {props.children}
            
        </Modal>
    </div>
}

export default ModalDialog