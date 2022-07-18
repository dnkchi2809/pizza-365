const initialState = {
    createOrderName: "",
    createOrderMail: "",
    createOrderPhone: "",
    createOrderAddress: "",
    createOrderDiscountCode: "",
    createOrderDiscountPercent: "",
    createOrderMessage: "",
    createOrderSizePizza: "",
    createOrderDuongKinh: "",
    createOrderSuonNuong: "",
    createOrderSalad: "",
    createOrderSoLuongNuoc: "",
    createOrderGiaTien: "",
    createOrderGiaTienPhaiTra: "",
    createOrderTypePizza: "",
    createOrderDrinkType: "",
    openModalAlert: false,
    openModalCreate: false,
    createResponse: {},
    openSnackbar: false,
    alertString: "",
    alertSeverity: "error"
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DRINK_SELECT":
            return {
                ...state,
                createOrderDrinkType: action.payload.drinkType
            };
            break;
        case "SELECT_SIZE":
            return {
                ...state,
                createOrderSizePizza: action.payload.createOrderSizePizza,
                createOrderDuongKinh: action.payload.createOrderDuongKinh,
                createOrderSuonNuong: action.payload.createOrderSuonNuong,
                createOrderSalad: action.payload.createOrderSalad,
                createOrderSoLuongNuoc: action.payload.createOrderSoLuongNuoc,
                createOrderGiaTien: action.payload.createOrderGiaTien,
            };
            break;
        case "SELECT_TYPE":
            return {
                ...state,
                createOrderTypePizza: action.payload.createOrderTypePizza
            };
            break;
        case "INPUT_CREATE_NAME":
            return {
                ...state,
                createOrderName: action.payload.createOrderName
            };
            break;
        case "INPUT_CREATE_MAIL":
            return {
                ...state,
                createOrderMail: action.payload.createOrderMail
            };
            break;
        case "INPUT_CREATE_PHONE":
            return {
                ...state,
                createOrderPhone: action.payload.createOrderPhone
            };
            break;
        case "INPUT_CREATE_ADDRESS":
            return {
                ...state,
                createOrderAddress: action.payload.createOrderAddress
            };
            break;
        case "INPUT_CREATE_CODE":
            return {
                ...state,
                createOrderDiscountCode: action.payload.createOrderDiscountCode
            };
            break;
        case "INPUT_CREATE_CODE_PERCENT":
            return {
                ...state,
                createOrderDiscountPercent: action.payload.createOrderDiscountPercent
            };
            break;
        case "INPUT_CREATE_THANH_TOAN":
            return {
                ...state,
                createOrderGiaTienPhaiTra: action.payload.createOrderGiaTienPhaiTra
            };
            break;
        case "INPUT_CREATE_MESSAGE":
            return {
                ...state,
                createOrderMessage: action.payload.createOrderMessage
            };
            break;
        case "MODAL_CREATE_ORDER":
            return {
                ...state,
                openModalCreate: action.payload.openModalCreate
            };
            break;
        case "CREATE_RESPONSE":
            return {
                ...state,
                createResponse: action.payload.createResponse
            };
            break;
        case "MODAL_ALERT":
            return {
                ...state,
                openModalAlert: action.payload.openModalAlert
            };
            break;
        case "OPEN_SNACKBAR":
            return {
                ...state,
                openSnackbar: action.payload.openSnackbar,
                alertString: action.payload.alertString
            };
            break;
        case "ALERT_SEVERITY":
            return {
                ...state,
                alertSeverity: action.payload.alertSeverity
            };
            break;
        default:
            return initialState;
            break;
    }
}

export default loadingReducer;