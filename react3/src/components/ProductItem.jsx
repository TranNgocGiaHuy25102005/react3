import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="card mb-4">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{item.name}</h5>
          <p className="card-text text-danger font-weight-bold">{item.price} $</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-dark">
              Add to carts 
            </button>
            <button 
              className="btn btn-info"
              data-toggle="modal" 
              data-target="#productModal"
              onClick={() => { setStateModal(item) }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}