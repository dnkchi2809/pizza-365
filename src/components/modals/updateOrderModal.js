import { Box, Typography, Modal } from "@mui/material";
import { Button, Col, Row, Label, Input } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import SnackbarAlert from "../alert/SnackbarAlert";

function UpdateOrderModal(props) {

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

    const { updateModalState } = useSelector((reduxData) => reduxData.reducer);

    const handleCreateModalClose = () => {
        dispatch({
            type: "UPDATE_ORDER",
            payload: {
                openModalCreate: false
            }
        })
    }

    const [newStatus, setNewStatus] = React.useState({ ...props.dataRowInfo.trangThai });
    React.useEffect(() => {
        setNewStatus(props.dataRowInfo.trangThai);
    }, [props.dataRowInfo.trangThai])

    const onBtnChangeStatus = (e) => {
        setNewStatus(e.target.value);
    }

    const onBtnConfirmUpdateClick = () => {
        let vOrderId = props.dataRowInfo.id;

        let vObjectRequest = {
            trangThai: newStatus
        }

        let content = {
            method: "PUT",
            body: JSON.stringify(vObjectRequest),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        fetch("http://42.115.221.44:8080/devcamp-pizza365/orders" + "/" + vOrderId, content)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                dispatch({
                    type: "OPEN_SNACKBAR",
                    payload: {
                        openSnackbar: true,
                        alertString: "Update thành công"
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


    return (
        <>
            <Modal open={updateModalState} onClose={handleCreateModalClose}>
                <Box style={style}>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Cập nhật đơn hàng</strong>
                    </Typography>
                    <Row>
                        <Col sm="6">
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Size Pizza</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.kichCo} readOnly />
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Đường kính</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.duongKinh} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Sườn nướng</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.suon} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Salad</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.salad} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Số lượng nước</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.soLuongNuoc} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Giá tiền</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.thanhTien} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Loại Pizza</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.loaiPizza} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Loại nước uống</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.idLoaiNuocUong} readOnly />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm="6">
                            <Row>
                                <Col sm="5">
                                    <Label>Họ và tên</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.hoTen} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Số điện thoại</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.soDienThoai} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Email</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.email} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Địa chỉ</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.diaChi} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Mã giảm giá</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.idVourcher} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Số tiền giảm</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.giamGia} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Thanh toán</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.thanhTien - props.dataRowInfo.giamGia} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Lời nhắn</Label>
                                </Col>
                                <Col sm="7">
                                    <Input className="form-control" value={props.dataRowInfo.loiNhan} readOnly />
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="5">
                                    <Label>Trạng thái</Label>
                                </Col>
                                <Col sm="7">
                                    <Input type="select" className="form-control" value={newStatus} onChange={onBtnChangeStatus}>
                                        <option value={"open"}>Open</option>
                                        <option value={"cancel"}>Đã hủy</option>
                                        <option value={"confirmed"}>Đã xác nhận</option>
                                    </Input>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="6">
                            <Button className="bt btn-warning w-100" onClick={onBtnConfirmUpdateClick}>Confirm</Button>
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

export default UpdateOrderModal