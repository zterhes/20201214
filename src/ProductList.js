import React from 'react';
import Modal from './pages/productModal';

export default ({ product }) => {
  const { id, title, description, category, image, price } = product;
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className='card border-dark mb-3' style={{ width: '30%', margin: '10px' }}>
      <img src={image} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <button className='btn btn-primary' onClick={() => setModalShow(true)}>Watch this product</button>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        description={description}
        category={category}
        price={price}
        image={image}
      />
    </div>
  );
};
