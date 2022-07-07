import { Component } from "react";

class FormComponent extends Component {
    render() {
        return (
            <>
                {/*Gửi đơn*/}
                <div className="pt-4" id="form-guidon"></div>
                <div className="row mt-5 justify-content-center">
                    <h3 className="text-warning text-underline">Gửi đơn hàng</h3>
                </div>
                <div className="row mb-3 justify-content-center" style={{ borderRadius: "5px" }} id="form-order">
                    <div className="col-12 mt-3 mb-4">
                        <div className="row form-group mb-2">
                            <label className="h6">Tên</label>
                            <input className="form-control" placeholder="Nhập tên" id="inp-ten" />
                        </div>
                        <div className="row form-group mb-2">
                            <label className="h6">Email</label>
                            <input type="email" className="form-control" placeholder="Nhập Email" id="inp-email" />
                        </div>
                        <div className="row form-group mb-2">
                            <label className="h6">Số điện thoại</label>
                            <input type="tel" className="form-control" placeholder="Nhập Số điện thoại" id="inp-sodienthoai" />
                        </div>
                        <div className="row form-group mb-2">
                            <label className="h6">Địa chỉ</label>
                            <input className="form-control" placeholder="Nhập Địa chỉ" id="inp-diachi" />
                        </div>
                        <div className="row form-group mb-2">
                            <label className="h6">Mã giảm giá</label>
                            <input className="form-control" placeholder="Nhập Mã giảm giá" id="inp-magiamgia" />
                        </div>
                        <div className="row form-group mb-2">
                            <label className="h6">Lời nhắn</label>
                            <input className="form-control" placeholder="Nhập Lời nhắn" id="inp-loinhan" />
                        </div>
                        <div className="row form-group mb-2">
                            <button className="btn w-100 btn-select mt-3" id="btn-khachhang-gui"><b>Gửi</b></button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{ backgroundColor: "orange", borderRadius: "5px", display: "none" }} id="form-order-success">
                    <div className="col-11 mt-3 mb-3">
                        <div className="row">
                            <div className="col-12">
                                <h5>Cám ơn bạn đã đặt hàng tại Pizza 365. Mã đơn hàng của bạn là:</h5>
                            </div>
                            <div className="col-3">
                                <label>Mã đơn hàng:</label>
                            </div>
                            <div className="col-9">
                                <input className="form-control" id="inp-madonhang" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default FormComponent;