import { Grid, Snackbar, Alert, Modal } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import CreateOrderModal from "../../modals/CreateOrderModal";

function FormComponent() {
    const dispatch = useDispatch();

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const handleSnackBarClose = () => setOpenSnackBar(false);
    const [alert, setAlert] = useState("");

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
        createOrderDrinkType
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

    const onInputCreateOrderName = (e) => {
        dispatch({
            type: "INPUT_CREATE_NAME",
            payload: {
                createOrderName: e.target.value
            }
        })
    }

    const onInputCreateOrderMail = (e) => {
        dispatch({
            type: "INPUT_CREATE_MAIL",
            payload: {
                createOrderMail: e.target.value
            }
        })
    }

    const onInputCreateOrderPhone = (e) => {
        dispatch({
            type: "INPUT_CREATE_PHONE",
            payload: {
                createOrderPhone: e.target.value
            }
        })
    }

    const onInputCreateOrderAdress = (e) => {
        dispatch({
            type: "INPUT_CREATE_ADDRESS",
            payload: {
                createOrderAddress: e.target.value
            }
        })
    }

    const onInputCreateOrderDiscountCode = (e) => {
        dispatch({
            type: "INPUT_CREATE_CODE",
            payload: {
                createOrderDiscountCode: e.target.value
            }
        })

        fetch("http://42.115.221.44:8080/devcamp-voucher-api/voucher_detail/" + e.target.value)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: "INPUT_CREATE_CODE_PERCENT",
                    payload: {
                        createOrderDiscountPercent: data.phanTramGiamGia
                    }
                })

                let giaTienPhaiTra = createOrderGiaTien - (createOrderGiaTien * data.phanTramGiamGia / 100);
                dispatch({
                    type: "INPUT_CREATE_THANH_TOAN",
                    payload: {
                        createOrderGiaTienPhaiTra: giaTienPhaiTra
                    }
                })
            })
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: "INPUT_CREATE_CODE_PERCENT",
                    payload: {
                        createOrderDiscountPercent: 0
                    }
                })

                let giaTienPhaiTra = createOrderGiaTien;
                dispatch({
                    type: "INPUT_CREATE_THANH_TOAN",
                    payload: {
                        createOrderGiaTienPhaiTra: giaTienPhaiTra
                    }
                })
            })
    }

    const onInputCreateOrderMessage = (e) => {
        dispatch({
            type: "INPUT_CREATE_MESSAGE",
            payload: {
                createOrderMessage: e.target.value
            }
        })
    }

    const onBtnCreateOrderClick = () => {
        const validOrder = validateOrder(newOrder);
        //const validOrder = true;
        if (validOrder) {
            console.log("Order valid");
            dispatch({
                type: "MODAL_CREATE_ORDER",
                payload: {
                    openModalCreate: true
                }
            })
        }

    }

    const validateOrder = (paramOrder) => {
        if (paramOrder.kichCo == "") {
            setOpenSnackBar(true);
            setAlert("Chưa chọn size Pizza");
            window.location.href = "#pizza-combo";
            return false;
        }
        if (paramOrder.loaiPizza == "") {
            setOpenSnackBar(true);
            setAlert("Chưa chọn loại Pizza");
            window.location.href = "#pizza-type";
            return false;
        }
        if (paramOrder.idLoaiNuocUong == "") {
            setOpenSnackBar(true);
            setAlert("Chưa chọn loại nước uống");
            window.location.href = "#drinklist";
            return false;
        }
        if (paramOrder.hoTen == "") {
            setOpenSnackBar(true);
            setAlert("Tên không được để trống");
            return false;
        };
        if (paramOrder.email == "") {
            setOpenSnackBar(true);
            setAlert("Email không được để trống");
            return false;
        };
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(paramOrder.email) == false) {
            setOpenSnackBar(true);
            setAlert("Email không hợp lệ");
            return false;
        };
        if (paramOrder.soDienThoai == "") {
            setOpenSnackBar(true);
            setAlert("Số điện thoại không được để trống");
            return false;
        };
        if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(paramOrder.soDienThoai) == false) {
            setOpenSnackBar(true);
            setAlert("Số điện thoại không hợp lệ");
            return false;
        };
        if (paramOrder.diaChi == "") {
            setOpenSnackBar(true);
            setAlert("Địa chỉ không được để trống");
            return false;
        };
        return true;
    }

    return (
        <>
            {/*Gửi đơn*/}
            <Grid className="pt-4" id="form-guidon"></Grid>
            <Grid className="row mt-5 justify-content-center">
                <h3 className="text-warning text-underline">Gửi đơn hàng</h3>
            </Grid>
            <Grid className="row mb-3 justify-content-center" style={{ borderRadius: "5px" }} id="form-order">
                <Grid className="col-12 mt-3 mb-4">
                    <Grid className="row form-group mb-2">
                        <label className="h6 text-light">Tên</label>
                        <input className="form-control" placeholder="Nhập tên" id="inp-ten" onInput={onInputCreateOrderName} />
                    </Grid>
                    <Grid className="row form-group mb-2">
                        <label className="h6 text-light">Email</label>
                        <input type="email" className="form-control" placeholder="Nhập Email" id="inp-email" onInput={onInputCreateOrderMail} />
                    </Grid>
                    <Grid className="row form-group mb-2">
                        <label className="h6 text-light">Số điện thoại</label>
                        <input type="tel" className="form-control" placeholder="Nhập Số điện thoại" id="inp-sodienthoai" onInput={onInputCreateOrderPhone} />
                    </Grid>
                    <Grid className="row form-group mb-2">
                        <label className="h6 text-light">Địa chỉ</label>
                        <input className="form-control" placeholder="Nhập Địa chỉ" id="inp-diachi" onInput={onInputCreateOrderAdress} />
                    </Grid>
                    <Grid className="row form-group mb-2">
                        <label className="h6 text-light">Mã giảm giá</label>
                        <input className="form-control" placeholder="Nhập Mã giảm giá" id="inp-magiamgia" onInput={onInputCreateOrderDiscountCode} />
                    </Grid>
                    <Grid className="row form-group mb-2">
                        <label className="h6 text-light">Lời nhắn</label>
                        <input className="form-control" placeholder="Nhập Lời nhắn" id="inp-loinhan" onInput={onInputCreateOrderMessage} />
                    </Grid>
                    <Grid className="row form-group mb-2">
                        <button style={{ backgroundColor: "orange" }} className="btn w-100 mt-3" id="btn-khachhang-gui" onClick={onBtnCreateOrderClick}><b>Gửi</b></button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="row justify-content-center" style={{ backgroundColor: "orange", borderRadius: "5px", display: "none" }} id="form-order-success">
                <Grid className="col-11 mt-3 mb-3">
                    <Grid className="row">
                        <Grid className="col-12">
                            <h5>Cám ơn bạn đã đặt hàng tại Pizza 365. Mã đơn hàng của bạn là:</h5>
                        </Grid>
                        <Grid className="col-3">
                            <label>Mã đơn hàng:</label>
                        </Grid>
                        <Grid className="col-9">
                            <input className="form-control" id="inp-madonhang" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Modal create order */}
            <CreateOrderModal />


            {/* Snackbar alert */}
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={3000} onClose={handleSnackBarClose}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    {alert}
                </Alert>
            </Snackbar>
        </>
    )
}
export default FormComponent;