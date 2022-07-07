import { Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function DrinkComponent() {
    const dispatch = useDispatch();

    const [drinkList, setDrinkList] = useState([]);

    useEffect(() => {
        fetch("http://42.115.221.44:8080/devcamp-pizza365/drinks")
            .then((response) => response.json())
            .then((data) => {
                setDrinkList(data);
            })
    }, [])

    const onBtnSelectDrinkClick = (event) => {
        dispatch({
            type: "DRINK_SELECT",
            payload: {
                drinkType: event.target.value
            }
        })
    }
    return (
        <>
            {/*Chọn đồ uống*/}
            <Grid className="pt-4" id="drinklist"></Grid>
            <Grid className="row mt-5 mb-3 justify-content-center">
                <h3 className="text-warning text-underline">Chọn đồ uống</h3>
            </Grid>
            <Grid className="row">
                <select className="form-control w-100" id="select-drink" onChange={onBtnSelectDrinkClick}>
                    <option value="none">Tất cả loại nước uống</option>
                    {
                        drinkList.map((element, index) => {
                            return (
                                <option key={index} value={element.maNuocUong} > {element.tenNuocUong}</option>
                            )
                        })
                    }
                </select>
            </Grid>
        </>
    )
}
export default DrinkComponent;