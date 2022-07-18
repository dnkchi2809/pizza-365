import { Grid } from "@mui/material"

function HeaderComponent() {
    return (
        <>
            {/*Menu*/}
            <Grid className="row">
                <Grid className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-warning">
                        <Grid className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav nav-fill w-100">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Trang chủ<span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#pizza-combo">Combo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#pizza-type">Loại Pizza</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/orders">Đơn hàng</a>
                                </li>
                            </ul>
                        </Grid>
                    </nav>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderComponent;