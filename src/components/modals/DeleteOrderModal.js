import { Box, Typography, Modal } from "@mui/material";
import { Button, Col, Row } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
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

    const { deleteModalState } = useSelector((reduxData) => reduxData.reducer);

    const handleCreateModalClose = () => {
        dispatch({
            type: "DELETE_ORDER",
            payload: {
                openModalCreate: false
            }
        })
    }

    const onBtnConfirmDeleteClick = () => {
        let vOrderId = props.dataRowInfo.id;

        let content = {
            method: "DELETE",
        }

        fetch("http://42.115.221.44:8080/devcamp-pizza365/orders" + "/" + vOrderId, content)
            .then(() => {
                dispatch({
                    type: "OPEN_SNACKBAR",
                    payload: {
                        openSnackbar: true,
                        alertString: "Delete thành công"
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
            <Modal open={deleteModalState} onClose={handleCreateModalClose}>
                <Box style={style}>
                    <Typography mb={2} id="modal-modal-title" variant="h5" component="h2">
                        <strong>Xóa đơn hàng</strong>
                    </Typography>
                    <Row className="text-center mb-5">
                        <Typography>Xác nhận xóa đơn hàng</Typography>
                    </Row>
                    <Row className="mt-2">
                        <Col sm="6">
                            <Button className="bt btn-warning w-100" onClick={onBtnConfirmDeleteClick}>Confirm</Button>
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
