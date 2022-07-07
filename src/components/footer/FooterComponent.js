import {Grid} from "@mui/material"

function FooterComponent() {
        return (
            <>
                {/*Footer*/}
                <Grid className="container-fluid mt-5" style={{ backgroundColor: "orange" }}>
                    <Grid className="text-center p-4">
                        <Grid className="h4">Footer</Grid>
                        <Grid>
                            <a href="#topPage" className="btn btn-dark text-white"><i className="fas fa-arrow-alt-circle-up"></i> To the
                                top</a>
                        </Grid>
                        <Grid className="pt-3">
                            <i className="fab fa-facebook-square"></i>&nbsp;
                            <i className="fab fa-instagram"></i>&nbsp;
                            <i className="fab fa-snapchat"></i>&nbsp;
                            <i className="fab fa-pinterest-p"></i>&nbsp;
                            <i className="fab fa-twitter"></i>&nbsp;
                            <i className="fab fa-linkedin-in"></i>
                        </Grid>
                        <Grid>Powered by DEVCAMP</Grid>
                    </Grid>
                </Grid>
            </>
        )
}

export default FooterComponent