import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, InputLabel, MenuItem, Button, FormControl } from "@mui/material"

import { useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';

import Select from '@mui/material/Select';

import { useDispatch } from "react-redux"

import CreateOrderModal2 from "../../modals/CreateOrderModal2";

import UpdateOrderModal from "../../modals/UpdateOrderModal";

import DeleteOrderModal from "../../modals/DeleteOrderModal";


function OrderTable() {
    const dispatch = useDispatch();

    const [limit, setLimit] = useState(10);

    const [pageIndex, setPageIndex] = useState(1);

    const [pageAmount, setPageAmount] = useState(0);

    const [rows, setRows] = useState([]);
    const fetchAPI = async (url) => {
        const response = await fetch(url);
        const data = response.json();
        return data
    }

    const onPageIndexChange = (event, value) => {
        setPageIndex(value);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const onBtnAddOrderClick = () => {
        dispatch({
            type: "CREATE_ORDER",
            payload: {
                createModalState: true
            }
        })
    }

    const onSelectClick = (event, option) => {
        setLimit(option.props.value)
    }

    const [rowInfo, setRowInfo] = useState({})

    const onBtnUpdateClick = (row) => {
        setRowInfo(row)
        dispatch({
            type: "UPDATE_ORDER",
            payload: {
                updateModalState: true
            }
        })
    }

    const onBtnDeleteClick = (row) => {
        setRowInfo(row)
        dispatch({
            type: "DELETE_ORDER",
            payload: {
                deleteModalState: true
            }
        })
    }

    useEffect(() => {
        fetchAPI("http://42.115.221.44:8080/devcamp-pizza365/orders")
            .then((data) => {
                setPageAmount(Math.ceil(data.length / limit));
                setRows(data.slice((pageIndex - 1) * limit, pageIndex * limit))
            })
            .catch((error) => { })
    })

    return (
        <>
            <Grid container justifyContent="center" sx={{paddingTop : "2%"}}>
                <h1>Danh sách đơn hàng</h1>
            </Grid>
            {/* Select NumberPage*/}
            <Grid container>
                <Grid item sx={{ width: "50%" }}>
                    <Button variant="contained" color="success" onClick={onBtnAddOrderClick}>Add Order</Button>
                </Grid>
                <Grid item sx={{ width: "50%" }}>
                    <Grid container justifyContent="flex-end">
                        <FormControl variant="filled" sx={{ minWidth: 120 }} size="small">
                            <InputLabel id="row-limit-select-label" mr={3}>Rows / Page</InputLabel>
                            <Select fullWidth labelId="demo-simple-select-label" defaultValue={"10"} onChange={onSelectClick}>
                                <MenuItem value={"5"}>5</MenuItem>
                                <MenuItem value={"10"}>10</MenuItem>
                                <MenuItem value={"25"}>25</MenuItem>
                                <MenuItem value={"50"}>50</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Order ID</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Họ tên</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Email</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Số điện thoại</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Pizza Size</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Pizza Type</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Loại nước</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Thanh toán</TableCell>
                                    <TableCell sx={{ width: 150, textAlign: "center", fontWeight : "bold" }}>Trạng thái</TableCell>
                                    <TableCell sx={{ width: "10%", textAlign: "center", fontWeight : "bold" }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.hoTen}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.soDienThoai}</TableCell>
                                            <TableCell>{row.kichCo}</TableCell>
                                            <TableCell>{row.loaiPizza}</TableCell>
                                            <TableCell>{row.idLoaiNuocUong}</TableCell>
                                            <TableCell>{row.thanhTien}</TableCell>
                                            <TableCell>{row.trangThai}</TableCell>
                                            <TableCell>
                                                <Grid container>
                                                    <Grid item>
                                                        <Button variant="contained" onClick={() => onBtnUpdateClick(row)}>Update</Button>
                                                    </Grid>
                                                    <Grid item mt={1}>
                                                        <Button variant="contained" color="error" onClick={() => onBtnDeleteClick(row)}>Delete</Button>
                                                    </Grid>
                                                </Grid>

                                            </TableCell>
                                        </TableRow>)
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            {/* Pagination */}
            <Grid container justifyContent="center">
                <Pagination count={pageAmount} defaultPage={pageIndex} onChange={onPageIndexChange} />
            </Grid>

            {/* Modal */}
            <CreateOrderModal2 />
            <UpdateOrderModal dataRowInfo={rowInfo} />
            <DeleteOrderModal dataRowInfo={rowInfo} />
        </>
    )
}

export default OrderTable