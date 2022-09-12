import React from 'react';
import {Modal} from "semantic-ui-react";
import "./modalBasic.scss"

export function ModalBasic(props) {
    const {show, size, title, children, onClose} = props;
    return (
        <Modal className="modal-basic" open={show} size={size} onClose={onClose}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>{children}</Modal.Content>
        </Modal>
    );
}

ModalBasic.defaultProps={
    size: "tiny",
}
