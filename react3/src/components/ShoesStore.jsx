import React, { Component } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';
import dataJson from '../data.json';

export default class ShoesStore extends Component {
  state = {
    productDetail: dataJson[0] 
  }

  setStateModal = (product) => {
    this.setState({
      productDetail: product
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <h1 className="text-center mb-5">Shoes Shop</h1>
        <div className="row">
          <div className="col-2">
            <ul className="list-group">
              <li className="list-group-item active">Home</li>
              <li className="list-group-item">Shop</li>
            </ul>
          </div>
          <div className="col-10">
            <ProductList 
              productsData={dataJson} 
              setStateModal={this.setStateModal} 
            />
          </div>
        </div>
        
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}