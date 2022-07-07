import { Grid, Card } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SizeComponent() {
    const dispatch = useDispatch();

    const [colorButtonS, setColorButtonS] = useState("orange")
    const [colorButtonM, setColorButtonM] = useState("orange")
    const [colorButtonL, setColorButtonL] = useState("orange")

    const onSelectSizeS = () => {
        setColorButtonS("lightsalmon");
        setColorButtonM("orange");
        setColorButtonL("orange");
        dispatch({
            type: "SELECT_SIZE",
            payload: {
                createOrderSizePizza: "S",
                createOrderDuongKinh: "20",
                createOrderSuonNuong: "2",
                createOrderSalad: "200",
                createOrderSoLuongNuoc: "2",
                createOrderGiaTien: "150000",
            }
        })
    }

    const onSelectSizeM = () => {
        setColorButtonS("orange");
        setColorButtonM("lightsalmon");
        setColorButtonL("orange");
        dispatch({
            type: "SELECT_SIZE",
            payload: {
                createOrderSizePizza: "M",
                createOrderDuongKinh: "25",
                createOrderSuonNuong: "4",
                createOrderSalad: "300",
                createOrderSoLuongNuoc: "3",
                createOrderGiaTien: "200000",
            }
        })
    }

    const onSelectSizeL = () => {
        setColorButtonS("orange");
        setColorButtonM("orange");
        setColorButtonL("lightsalmon");
        dispatch({
            type: "SELECT_SIZE",
            payload: {
                createOrderSizePizza: "L",
                createOrderDuongKinh: "30",
                createOrderSuonNuong: "8",
                createOrderSalad: "500",
                createOrderSoLuongNuoc: "4",
                createOrderGiaTien: "250000",
            }
        })
    }
    return (
        <>
            {/*Chọn pizza size*/}
            <Grid className="pt-4" id="pizza-combo"></Grid>
            <Grid className="row mt-5 justify-content-center">
                <h3 className="text-warning text-underline">Chọn size pizza</h3>
            </Grid>
            <Grid className="row mb-2 justify-content-center">
                <p className="text-warning text-center">Chọn combo pizza phù hợp với nhu cầu của bạn</p>
            </Grid>
            <Grid className="row">
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <Grid className="card-header text-center" style={{ backgroundColor: "orange" }}>
                            <h4 id="size-S">S (small)</h4>
                        </Grid>
                        <Grid className="container">
                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item">Đường kính: <b id="duongkinh-S">20cm</b></li>
                                <li className="list-group-item">Sườn nướng: <b id="suonnuong-S">2</b></li>
                                <li className="list-group-item">Salad: <b id="salad-S">200g</b></li>
                                <li className="list-group-item">Nước ngọt: <b id="nuocngot-S">2</b></li>
                                <li className="list-group-item">
                                    <h1 id="thanhtien-S">150.000</h1>VNĐ
                                </li>
                            </ul>
                        </Grid>
                        <Grid className="card-footer">
                            <button style={{ backgroundColor: colorButtonS }} className="btn w-100 chon-size-pizza" id="select-S" onClick={onSelectSizeS}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>

                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <Grid className="card-header bg-warning text-center">
                            <h4 id="size-M">M (medium)</h4>
                        </Grid>
                        <Grid className="container">
                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item">Đường kính: <b id="duongkinh-M">25cm</b></li>
                                <li className="list-group-item">Sườn nướng: <b id="suonnuong-M">4</b></li>
                                <li className="list-group-item">Salad: <b id="salad-M">300g</b></li>
                                <li className="list-group-item">Nước ngọt: <b id="nuocngot-M">3</b></li>
                                <li className="list-group-item">
                                    <h1 id="thanhtien-M">200.000</h1>VNĐ
                                </li>
                            </ul>
                        </Grid>
                        <Grid className="card-footer">
                            <button style={{ backgroundColor: colorButtonM }} className="btn w-100 chon-size-pizza" id="select-M" onClick={onSelectSizeM}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>

                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <Grid className="card-header text-center" style={{ backgroundColor: "orange" }}>
                            <h4 id="size-L">L (large)</h4>
                        </Grid>
                        <Grid className="container">
                            <ul className="list-group list-group-flush text-center">
                                <li className="list-group-item">Đường kính: <b id="duongkinh-L">30cm</b></li>
                                <li className="list-group-item">Sườn nướng: <b id="suonnuong-L">8</b></li>
                                <li className="list-group-item">Salad: <b id="salad-L">500g</b></li>
                                <li className="list-group-item">Nước ngọt: <b id="nuocngot-L">4</b></li>
                                <li className="list-group-item">
                                    <h1 id="thanhtien-L">250.000</h1>VNĐ
                                </li>
                            </ul>
                        </Grid>
                        <Grid className="card-footer">
                            <button style={{ backgroundColor: colorButtonL }} className="btn w-100 chon-size-pizza" id="select-L" onClick={onSelectSizeL}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default SizeComponent;