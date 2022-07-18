import { Snackbar, Alert } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

function SnackbarAlert() {
    const {
        openSnackbar,
        alertString,
        alertSeverity
    } = useSelector((reduxData) => reduxData.reducer);

    const dispatch = useDispatch();

    const handleSnackBarClose = () => {
        dispatch({
            type: "OPEN_SNACKBAR",
            payload: {
                openSnackbar: false,
            }
        })
    }
    return (
        <>
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackbar} autoHideDuration={3000} onClose={handleSnackBarClose}>
                <Alert severity={alertSeverity} sx={{ width: '100%' }}>
                    {alertString}
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnackbarAlert;