import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props;

    return (
      <div className="row">
        {productsData.map((product, index) => {
          return (
            <div className="col-4" key={index}>
              <ProductItem 
                item={product} 
                setStateModal={setStateModal} 
              />
            </div>
          );
        })}
      </div>
    );
  }
}