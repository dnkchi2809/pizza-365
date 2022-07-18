import { Box, Typography, Modal } from "@mui/material";
import { Button, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

function CreateOrderModal() {
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

    const dispatch = useDispatch();

    const {
        createOrderName,
        createOrderMail,
        createOrderPhone,
        createOrderAddress,
        createOrderDiscountCode,
        createOrderDiscountPercent,
        createOrderMessage,
        createOrderSizePizza,
        createOrderDuongKinh,
        createOrderSuonNuong,
        createOrderSalad,
        createOrderSoLuongNuoc,
        createOrderGiaTien,
        createOrderGiaTienPhaiTra,
        createOrderTypePizza,
        createOrderDrinkType,
        openModalCreate
    } = useSelector((reduxData) => reduxData.reducer);

    const newOrder = {
        kichCo: createOrderSizePizza,
        duongKinh: createOrderDuongKinh,
        suon: createOrderSuonNuong,
        salad: createOrderSalad,
        loaiPizza: createOrderTypePizza,
        idVourcher: createOrderDiscountCode,
        phanTramGiamGia: createOrderDiscountPercent,
        idLoaiNuocUong: createOrderDrinkType,
        soLuongNuoc: createOrderSoLuongNuoc,
        hoTen: createOrderName,
        thanhTien: createOrderGiaTien,
        thanhToan: createOrderGiaTienPhaiTra,
        email: createOrderMail,
        soDienThoai: createOrderPhone,
        diaChi: createOrderAddress,
        loiNhan: createOrderMessage
    }

    const onBtnConfirmCreateOrderClick = () => {
        let content = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newOrder)
        };

        fetch("http://42.115.221.44:8080/devcamp-pizza365/orders", content)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch({
                    type: "CREATE_RESPONSE",
                    payload: {
                        createResponse: data
                    }
                })
                dispatch({
                    type: "MODAL_ALERT",
                    payload: {
                        openModalAlert: true
                    }
                })
            })


        handleModalCreateClose();
    }

    const handleModalCreateClose = () => {
        dispatch({
            type: "MODAL_CREATE_ORDER",
            payload: {
                openModalCreate: false
            }
        })
    }

    return (
        <>
            <Modal open={openModalCreate} onClose={handleModalCreateClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box style={style}>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Xác nhận thông tin đặt hàng</strong>
                    </Typography>
                    <Row>
                        <Col sm="6">
                            <Row>
                                <Col sm="5">
                                    <label>Họ và tên</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderName} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Số điện thoại</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderPhone} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Email</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderMail} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Địa chỉ</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderAddress} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Size Pizza</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderSizePizza} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Loại Pizza</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderTypePizza} readonly />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="6">
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Loại nước uống</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderDrinkType} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Mã giảm giá</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderDiscountCode} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Giảm %</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderDiscountPercent} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Thành tiền</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderGiaTien} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <label>Thanh toán</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" value={createOrderGiaTienPhaiTra} readonly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="6">
                                    <Button className="bt btn-warning w-100" onClick={onBtnConfirmCreateOrderClick}>Confirm</Button>
                                </Col>
                                <Col sm="6">
                                    <Button className="bt btn-primary w-100" onClick={handleModalCreateClose}>Cancel</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Box>
            </Modal>
        </>
    )
}

export default CreateOrderModal