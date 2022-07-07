import { Component } from "react";

class SizeComponent extends Component {
    render() {
        return (
            <>
                {/*Chọn pizza size*/}
                <div className="pt-4" id="pizza-combo"></div>
                <div className="row mt-5 justify-content-center">
                    <h3 className="text-warning text-underline">Chọn size pizza</h3>
                </div>
                <div className="row mb-2 justify-content-center">
                    <p className="text-warning text-center">Chọn combo pizza phù hợp với nhu cầu của bạn</p>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-header text-center" style={{ backgroundColor: "orange" }}>
                                <h4 id="size-S">S (small)</h4>
                            </div>
                            <div className="container">
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item">Đường kính: <b id="duongkinh-S">20cm</b></li>
                                    <li className="list-group-item">Sườn nướng: <b id="suonnuong-S">2</b></li>
                                    <li className="list-group-item">Salad: <b id="salad-S">200g</b></li>
                                    <li className="list-group-item">Nước ngọt: <b id="nuocngot-S">2</b></li>
                                    <li className="list-group-item">
                                        <h1 id="thanhtien-S">150.000</h1>VNĐ
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <button className="btn w-100 btn-select chon-size-pizza" id="select-S">Chọn</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-header bg-warning text-center">
                                <h4 id="size-M">M (medium)</h4>
                            </div>
                            <div className="container">
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item">Đường kính: <b id="duongkinh-M">25cm</b></li>
                                    <li className="list-group-item">Sườn nướng: <b id="suonnuong-M">4</b></li>
                                    <li className="list-group-item">Salad: <b id="salad-M">300g</b></li>
                                    <li className="list-group-item">Nước ngọt: <b id="nuocngot-M">3</b></li>
                                    <li className="list-group-item">
                                        <h1 id="thanhtien-M">200.000</h1>VNĐ
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <button className="btn w-100 btn-select chon-size-pizza" id="select-M">Chọn</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-header text-center" style={{ backgroundColor: "orange" }}>
                                <h4 id="size-L">L (large)</h4>
                            </div>
                            <div className="container">
                                <ul className="list-group list-group-flush text-center">
                                    <li className="list-group-item">Đường kính: <b id="duongkinh-L">30cm</b></li>
                                    <li className="list-group-item">Sườn nướng: <b id="suonnuong-L">8</b></li>
                                    <li className="list-group-item">Salad: <b id="salad-L">500g</b></li>
                                    <li className="list-group-item">Nước ngọt: <b id="nuocngot-L">4</b></li>
                                    <li className="list-group-item">
                                        <h1 id="thanhtien-L">250.000</h1>VNĐ
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <button className="btn w-100 btn-select chon-size-pizza" id="select-L">Chọn</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default SizeComponent;