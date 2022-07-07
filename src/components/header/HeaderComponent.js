import { Component } from "react";

class HeaderComponent extends Component {
    render() {
        return (
            <>
                {/*Menu*/}
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-warning">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav nav-fill w-100">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Trang chủ<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"#pizza-combo"}>Combo</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"#pizza-type"}>Loại Pizza</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"orderList.html"}>Đơn hàng</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}

export default HeaderComponent;