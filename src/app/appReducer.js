const initialState = {
    createOrderName: "",
    createOrderMail: "",
    createOrderPhone: "",
    createOrderAddress: "",
    createOrderDiscountCode: "",
    createOrderMessage: "",
    createOrderSizePizza: "",
    createOrderDuongKinh: "",
    createOrderSuonNuong: "",
    createOrderSalad: "",
    createOrderSoLuongNuoc: "",
    createOrderGiaTien: "",
    createOrderTypePizza: "",
    createOrderDrinkType: ""
    
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
        case "INPUT_CREATE_MESSAGE":
            return {
                ...state,
                createOrderMessage: action.payload.createOrderMessage
            };
            break;
        default:
            return initialState;
            break;
    }
}

export default loadingReducer;