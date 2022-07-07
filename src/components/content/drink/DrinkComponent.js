import { Component } from "react";

class DrinkComponent extends Component {
    render() {
        return (
            <>
                {/*Chọn đồ uống*/}
                <div className="pt-4" id="drinklist"></div>
                <div className="row mt-5 mb-3 justify-content-center">
                    <h3 className="text-warning text-underline">Chọn đồ uống</h3>
                </div>
                <div className="row">
                    <select className="form-control w-100" id="select-drink">
                        <option value="none">Tất cả loại nước uống</option>
                    </select>
                </div>
            </>
        )
    }
}
export default DrinkComponent;