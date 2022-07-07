import { Component } from "react";

class TypeComponent extends Component {
    render() {
        return (
            <>
                {/*Chọn loại pizza*/}
                <div className="pt-4" id="pizza-type"></div>
                <div className="row mt-5 mb-3 justify-content-center">
                    <h3 className="text-warning text-underline">Chọn loại pizza</h3>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={require("../../../../src/images/menu/ocean-mania.jpg")} alt="Card" />
                            <div className="card-body">
                                <h5 id="pizza-name-oceanmania">OCEAN MANIA</h5>
                                <p className="text-dark" id="info-oceanmania">PIZZA HẢI SẢN SỐT MAYONAISE</p>
                                <p className="card-text" id="thanhphan-oceanmania">Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực,
                                    Thanh Cua,
                                    Hành Tây.</p>
                            </div>
                            <div className="container mb-4">
                                <button className="btn w-100 btn-select chon-loai-pizza" id="select-oceanmania">Chọn</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={require("../../../../src/images/menu/hawaiian.jpg")} alt="Card" />
                            <div className="card-body">
                                <h5 id="pizza-name-hawaiian">HAWAIIAN</h5>
                                <p className="text-dark" id="info-hawaiian">PIZZA DĂM BÔNG DỨA KIỂU HAWAII</p>
                                <p className="card-text" id="thanhphan-hawaiian">Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông,
                                    Thơm.
                                </p>
                            </div>
                            <div className="container mb-4">
                                <button className="btn w-100 btn-select chon-loai-pizza" id="select-hawaiian">Chọn</button>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <img className="card-img-top" src={require("../../../../src/images/menu/cheesy-chicken-bacon.jpg")} alt="Card" />
                            <div className="card-body">
                                <h5 id="pizza-name-cheesy">CHEESY CHICKEN BACON</h5>
                                <p className="text-dark" id="info-cheesy">PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓ</p>
                                <p className="card-text" id="thanhphan-cheesy">Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai
                                    Mozzarella,
                                    Cà Chua.</p>
                            </div>
                            <div className="container mb-4">
                                <button className="btn w-100 btn-select chon-loai-pizza" id="select-cheesy">Chọn</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default TypeComponent;