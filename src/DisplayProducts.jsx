import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function DisplayProducts({ products, addItem, removeItem }) {
  const [show, setShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleShow = (product) => {
    setActiveProduct(product);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img
            src={product.img}
            alt={product.title}
            className="product-image"
            onClick={() => handleShow(product)}
            style={{ cursor: "pointer" }}
          />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.value}</p>
            <p className="product-rating">⭐ {product.ratings}</p>
            <div className="quantity-controls">
              <button
                className="quantity-btn btn-minus"
                onClick={() => removeItem(product.id)}
              >
                -
              </button>
              <input
                type="number"
                className="quantity-input"
                value="0"
                readOnly
                style={{ backgroundColor: "#f8f9fa" }}
              />
              <button
                className="quantity-btn btn-plus"
                onClick={() => addItem(product.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      {activeProduct && (
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={activeProduct.img}
              alt={activeProduct.title}
              className="modal-image"
            />
            <p className="modal-description">{activeProduct.desc}</p>
            <p className="modal-rating">⭐ {activeProduct.ratings}</p>
            <div className="modal-price">${activeProduct.value}</div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default DisplayProducts;
