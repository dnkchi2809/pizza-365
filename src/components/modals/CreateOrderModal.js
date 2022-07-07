import { Modal, Box, Typography } from "@mui/material";
import { Col, Row } from "reactstrap"

function CreateOrderModal() {

    return (
        <>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Thêm User!</strong>
                    </Typography>
                    <Row>
                        <Col sm="12">
                            <Row>
                                <Col sm="5">
                                    <label>Họ và tên</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" id="hoten-kh" readonly />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="5">
                                    <label>Số điện thoại</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" id="sdt-kh" readonly />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="5">
                                    <label>Địa chỉ</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" id="diachi-kh" readonly />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="5">
                                    <label>Lời nhắn</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" id="loinhan-kh" readonly />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="5">
                                    <label>mã giảm giá</label>
                                </Col>
                                <Col sm="7">
                                    <input className="form-control" id="magiamgia-kh" readonly />
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