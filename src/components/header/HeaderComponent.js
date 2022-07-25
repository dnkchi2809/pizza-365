import { Grid } from "@mui/material"

function HeaderComponent() {
    return (
        <>
            {/*Menu*/}
            <Grid className="row">
                <Grid className="col-12">
                    <Grid className="navbar navbar-expand-lg navbar-light fixed-top bg-warning">
                        <Grid className="row w-100 text-center">
                            <Grid className="col-3">
                                <a className="nav-link text-dark" href="/">Trang chủ<span className="sr-only">(current)</span></a>
                            </Grid>
                            <Grid className="col-3">
                                <a className="nav-link text-dark" href="/#pizza-combo">Combo</a>
                            </Grid>
                            <Grid className="col-3">
                                <a className="nav-link text-dark" href="/#pizza-type">Loại Pizza</a>
                            </Grid>
                            <Grid className="col-3">
                                <a className="nav-link text-dark" href="/orders">Đơn hàng</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderComponent;