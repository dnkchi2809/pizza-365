import { Grid, Card } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

function TypeComponent() {
    const dispatch = useDispatch();

    const [colorButtonOceanMania, setColorButtonOceanMania] = useState("orange")
    const [colorButtonHawaiian, setColorButtonHawaiian] = useState("orange")
    const [colorButtonCheesy, setColorButtonCheesy] = useState("orange")

    const onSelectTypeOceanMania = () => {
        setColorButtonOceanMania("lightsalmon");
        setColorButtonHawaiian("orange");
        setColorButtonCheesy("orange");
        dispatch({
            type : "SELECT_TYPE",
            payload : {
                createOrderTypePizza : "OCEAN MANIA"
            }
        })
    }

    const onSelectTypeHawaiian = () => {
        setColorButtonOceanMania("orange");
        setColorButtonHawaiian("lightsalmon");
        setColorButtonCheesy("orange");
        dispatch({
            type : "SELECT_TYPE",
            payload : {
                createOrderTypePizza : "HAWAIIAN"
            }
        })
    }

    const onSelectTypeCheesy = () => {
        setColorButtonOceanMania("orange");
        setColorButtonHawaiian("orange");
        setColorButtonCheesy("lightsalmon");
        dispatch({
            type : "SELECT_TYPE",
            payload : {
                createOrderTypePizza : "CHEESY CHICKEN BACON"
            }
        })
    }
    return (
        <>
            {/*Chọn loại pizza*/}
            <Grid className="pt-4" id="pizza-type"></Grid>
            <Grid className="row mt-5 mb-3 justify-content-center">
                <h3 className="text-warning text-underline">Chọn loại pizza</h3>
            </Grid>
            <Grid className="row">
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={require("../../../../src/images/menu/ocean-mania.jpg")} alt="Card" />
                        <Grid className="card-body">
                            <h5 id="pizza-name-oceanmania">OCEAN MANIA</h5>
                            <p className="text-dark" id="info-oceanmania">PIZZA HẢI SẢN SỐT MAYONAISE</p>
                            <p className="card-text" id="thanhphan-oceanmania">Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực,
                                Thanh Cua,
                                Hành Tây.</p>
                        </Grid>
                        <Grid className="container mb-4">
                            <button style={{backgroundColor : colorButtonOceanMania}} className="btn w-100 chon-loai-pizza" id="select-oceanmania" onClick={onSelectTypeOceanMania}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={require("../../../../src/images/menu/hawaiian.jpg")} alt="Card" />
                        <Grid className="card-body">
                            <h5 id="pizza-name-hawaiian">HAWAIIAN</h5>
                            <p className="text-dark" id="info-hawaiian">PIZZA DĂM BÔNG DỨA KIỂU HAWAII</p>
                            <p className="card-text" id="thanhphan-hawaiian">Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông,
                                Thơm.
                            </p>
                        </Grid>
                        <Grid className="container mb-4">
                            <button style={{backgroundColor : colorButtonHawaiian}} className="btn w-100 chon-loai-pizza" id="select-hawaiian"  onClick={onSelectTypeHawaiian}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
                <Grid className="col-4">
                    <Card className="card" style={{ width: "100%" }}>
                        <img className="card-img-top" src={require("../../../../src/images/menu/cheesy-chicken-bacon.jpg")} alt="Card" />
                        <Grid className="card-body">
                            <h5 id="pizza-name-cheesy">CHEESY CHICKEN BACON</h5>
                            <p className="text-dark" id="info-cheesy">PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓ</p>
                            <p className="card-text" id="thanhphan-cheesy">Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai
                                Mozzarella,
                                Cà Chua.</p>
                        </Grid>
                        <Grid className="container mb-4">
                            <button style={{backgroundColor : colorButtonCheesy}} className="btn w-100 chon-loai-pizza" id="select-cheesy" onClick={onSelectTypeCheesy}>Chọn</button>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default TypeComponent;