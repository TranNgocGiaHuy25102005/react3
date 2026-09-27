import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { content } = this.props;


    return (
      <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <img src={content.image} alt={content.name} className="img-fluid" />
                </div>
                <div className="col-8">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td><strong>Tên sản phẩm</strong></td>
                        <td>{content.name}</td>
                      </tr>
                      <tr>
                        <td><strong>Giá</strong></td>
                        <td>{content.price} $</td>
                      </tr>
                      <tr>
                        <td><strong>Mô tả</strong></td>
                        <td>{content.description}</td>
                      </tr>
                      <tr>
                        <td><strong>Mô tả ngắn</strong></td>
                        <td>{content.shortDescription}</td>
                      </tr>
                      <tr>
                        <td><strong>Số lượng</strong></td>
                        <td>{content.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}