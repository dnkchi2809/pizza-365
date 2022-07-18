import { Box, Typography, Modal } from "@mui/material";
import { Button, Col, Row, Label, Input } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SnackbarAlert from "../alert/SnackbarAlert";

function CreateOrderModal2() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        border: '1px solid #000',
        backgroundColor: "white",
        padding: "3%"
    };

    const [newOrder, setNewOrder] = useState({
        kichCo: "",
        duongKinh: 0,
        suon: 0,
        salad: 0,
        soLuongNuoc: 0,
        thanhTien: 0,
        loaiPizza: "",
        idVourcher: 0,
        idLoaiNuocUong: "",
        hoTen: "",
        email: "",
        soDienThoai: "",
        diaChi: "",
        loiNhan: "",
        phanTramGiamGia: 0,
        thanhToan: 0
    })

    const dispatch = useDispatch();

    const { createModalState } = useSelector((reduxData) => reduxData.reducer);

    const handleCreateModalClose = () => {
        dispatch({
            type: "CREATE_ORDER",
            payload: {
                openModalCreate: false
            }
        })

        setNewOrder({
            kichCo: "",
            duongKinh: 0,
            suon: 0,
            salad: 0,
            soLuongNuoc: 0,
            thanhTien: 0,
            loaiPizza: "",
            idVourcher: 0,
            idLoaiNuocUong: "",
            hoTen: "",
            email: "",
            soDienThoai: "",
            diaChi: "",
            loiNhan: "",
            phanTramGiamGia: 0,
            thanhToan: 0
        })
    }

    const fetchAPI = async (url, body) => {
        const response = await fetch(url, body);
        const data = response.json();
        return data
    }

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        fetchAPI("http://42.115.221.44:8080/devcamp-pizza365/drinks")
            .then((data) => {
                setDrinkList(data)
            })
    }, [])

    newOrder.thanhToan = newOrder.thanhTien - (newOrder.thanhTien * newOrder.phanTramGiamGia / 100);

    const onSelectSizePizza = (e) => {
        newOrder.kichCo = e.target.value;
        if (newOrder.kichCo === "None") {
            newOrder.duongKinh = 0;
            newOrder.suon = 0;
            newOrder.salad = 0;
            newOrder.soLuongNuoc = 0;
            newOrder.thanhTien = 0;
        }
        if (newOrder.kichCo === "S") {
            newOrder.duongKinh = 20;
            newOrder.suon = 2;
            newOrder.salad = 200;
            newOrder.soLuongNuoc = 2;
            newOrder.thanhTien = 150000;
        }
        if (newOrder.kichCo === "M") {
            newOrder.duongKinh = 25;
            newOrder.suon = 4;
            newOrder.salad = 300;
            newOrder.soLuongNuoc = 3;
            newOrder.thanhTien = 200000;
        }
        if (newOrder.kichCo === "L") {
            newOrder.duongKinh = 30;
            newOrder.suon = 8;
            newOrder.salad = 500;
            newOrder.soLuongNuoc = 4;
            newOrder.thanhTien = 250000;
        }
    }

    const onSelectTypePizza = (e) => {
        newOrder.loaiPizza = e.target.value
    }

    const onSelectTypeDrink = (e) => {
        newOrder.idLoaiNuocUong = e.target.value
    }

    const onInputHoTenChange = (e) => {
        newOrder.hoTen = e.target.value
    }

    const onInputSoDienThoaiChange = (e) => {
        newOrder.soDienThoai = e.target.value
    }

    const onInputEmailChange = (e) => {
        newOrder.email = e.target.value
    }

    const onInputDiaChiChange = (e) => {
        newOrder.diaChi = e.target.value
    }

    const onInputMaGiamGiaChange = (e) => {
        newOrder.idVourcher = e.target.value

        fetchAPI("http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/" + newOrder.idVourcher)
            .then((data) => {
                newOrder.phanTramGiamGia = Number(data.phanTramGiamGia);
            })
            .catch((err) => { })
    }

    const onInputLoiNhanChange = (e) => {
        newOrder.loiNhan = e.target.value
    }

    const onBtnConfirmClick = () => {
        let validOrder = validateOrder(newOrder);
        if (validOrder) {
            let content = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOrder)
            };

            fetchAPI("http://42.115.221.44:8080/devcamp-pizza365/orders", content)
                .then((data) => {
                    console.log(data);
                    dispatch({
                        type: "OPEN_SNACKBAR",
                        payload: {
                            openSnackbar: true,
                            alertString: "Tạo đơn hàng thành công"
                        }
                    });
                    dispatch({
                        type: "ALERT_SEVERITY",
                        payload: {
                            alertSeverity: "success"
                        }
                    });
                    handleCreateModalClose();
                })
        }
    }

    const validateOrder = (paramOrder) => {
        if (paramOrder.kichCo == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Chưa chọn size Pizza"
                }
            })
            return false;
        }
        if (paramOrder.loaiPizza == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Chưa chọn loại Pizza"
                }
            })
            return false;
        }
        if (paramOrder.idLoaiNuocUong == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Chưa chọn loại nước uống"
                }
            })
            return false;
        }
        if (paramOrder.hoTen == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Tên không được để trống"
                }
            })
            return false;
        };
        if (paramOrder.soDienThoai == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Số điện thoại không được để trống"
                }
            })
            return false;
        };
        if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(paramOrder.soDienThoai) == false) {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Số điện thoại không hợp lệ"
                }
            })
            return false;
        };
        if (paramOrder.email == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Email không được để trống"
                }
            })
            return false;
        };
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(paramOrder.email) == false) {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Email không hợp lệ"
                }
            })
            return false;
        };
        if (paramOrder.diaChi == "") {
            dispatch({
                type: "OPEN_SNACKBAR",
                payload: {
                    openSnackbar: true,
                    alertString: "Địa chỉ không được để trống"
                }
            })
            return false;
        };
        return true;
    }

    return (
        <>
            <Modal open={createModalState} onClose={handleCreateModalClose}>
                <Box style={style}>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Tạo đơn hàng</strong>
                    </Typography>
                    <Row>
                        <Col sm="6">
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Size Pizza</Label>
                                </Col>
                                <Col sm="7">
                                    <Input type="select" className="form-control" onChange={onSelectSizePizza}>
                                        <option value={"None"}>Chọn size Pizza</option>
                                        <option value={"S"}>S</option>
                                        <option value={"M"}>M</option>
                                        <option value={"L"}>L</option>
                                    </Input>
                                </Col>
                            </Row>
                            {
                                newOrder.kichCo.length === 1
                                    ?
                                    <>
                                        <Row className="mt-2">
                                            <Col sm="5">
                                                <Label>Đường kính</Label>
                                            </Col>
                                            <Col sm="7">
                                                <Input className="form-control" value={newOrder.duongKinh} readOnly />
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col sm="5">
                                                <Label>Sườn nướng</Label>
                                            </Col>
                                            <Col sm="7">
                                                <Input className="form-control" value={newOrder.suon} readOnly />
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col sm="5">
                                                <Label>Salad</Label>
                                            </Col>
                                            <Col sm="7">
                                                <Input className="form-control" value={newOrder.salad} readOnly />
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col sm="5">
                                                <Label>Số lượng nước</Label>
                                            </Col>
                                            <Col sm="7">
                                                <Input className="form-control" value={newOrder.soLuongNuoc} readOnly />
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col sm="5">
                                                <Label>Giá tiền</Label>
                                            </Col>
                                            <Col sm="7">
                                                <Input className="form-control" value={newOrder.thanhTien} readOnly />
                                            </Col>
                                        </Row>
                                    </>
                                    :
                                    null
                            }
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Loại Pizza</Label>
                                </Col>
                                <Col sm="7">
                                    <Input type="select" className="form-control" onChange={onSelectTypePizza}>
                                        <option value={"None"}>Chọn loại Pizza</option>
                                        <option value={"Seafood"}>Hải sản</option>
                                        <option value={"Hawaii"}>Hawaii</option>
                                        <option value={"Bacon"}>Thịt hun khói</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Loại nước uống</Label>
                                </Col>
                                <Col sm="7">
                                    <Input type="select" className="form-control" onChange={onSelectTypeDrink}>
                                        <option value={"None"}>Chọn loại nước uống</option>
                                        {
                                            drinkList.map((element, index) => {
                                                return (
                                                    <option value={element.maNuocUong}>{element.tenNuocUong}</option>
                                                )
                                            })
                                        }
                                    </Input>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="6">
                            <Row>
                                <Col sm="5">
                                    <Label>Họ và tên</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" onInput={onInputHoTenChange} />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Số điện thoại</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" onInput={onInputSoDienThoaiChange} />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Email</Label>
                                </Col>
                                <Col sm="7">
                                    <Input type="mail" className="form-control" onInput={onInputEmailChange} />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Địa chỉ</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" onInput={onInputDiaChiChange} />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Mã giảm giá</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" onInput={onInputMaGiamGiaChange} />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Giảm %</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={newOrder.phanTramGiamGia} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Thanh toán</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={newOrder.thanhToan} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Lời nhắn</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" onInput={onInputLoiNhanChange} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="6">
                            <Button className="bt btn-warning w-100" onClick={onBtnConfirmClick}>Confirm</Button>
                        </Col>
                        <Col sm="6">
                            <Button className="bt btn-primary w-100" onClick={handleCreateModalClose}>Cancel</Button>
                        </Col>
                    </Row>
                </Box>
            </Modal>

            {/* Snackbar alert */}
            <SnackbarAlert/>
        </>
    )
}

export default CreateOrderModal2