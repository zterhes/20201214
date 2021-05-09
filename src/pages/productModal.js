import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../style.css';

export default (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <h4>{props.title}</h4>
        <img src={props.image} className=' picHeight card-img-top ' alt='...' />
        <p>
          {props.description}
        </p>
        <h4>€{props.price}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => window.alert('You added to cart')}>Add to cart</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
;
