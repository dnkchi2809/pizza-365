import { Box, Typography, Modal } from "@mui/material";
import { Button, Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

function AlertModal() {
    const dispatch = useDispatch();

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

    const { openModalAlert, createResponse } = useSelector((reduxData) => reduxData.reducer);
    console.log(openModalAlert)
    console.log(createResponse)
    const handleModalCreateClose = () => {
        dispatch({
            type: "MODAL_CREATE_ORDER",
            payload: {
                openModalAlert: false
            }
        })
        window.location.reload();
    }

    return (
        <>
            <Modal open={openModalAlert} onClose={handleModalCreateClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box style={style}>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Đặt hàng thành công</strong>
                    </Typography>
                    <Row>
                        <Row>
                            <Col sm="5">
                                <label>Mã đặt hàng</label>
                            </Col>
                            <Col sm="7">
                                <input className="form-control" value={createResponse.id} readOnly />
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col>
                                Cám ơn quý khách đã đặt hàng tại Pizza 365!
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col sm="12">
                                <Button className="bt btn-warning w-100" onClick={handleModalCreateClose}>OK</Button>
                            </Col>
                        </Row>
                    </Row>
                </Box>
            </Modal>
        </>
    )
}

export default AlertModal