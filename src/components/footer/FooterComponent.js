import { Component } from "react";

class FooterComponent extends Component {
    render() {
        return (
            <>
                {/*Footer*/}
                <div className="container-fluid mt-5" style={{ backgroundColor: "orange" }}>
                    <div className="text-center p-4">
                        <div className="h4">Footer</div>
                        <div>
                            <a href="#topPage" className="btn btn-dark text-white"><i className="fas fa-arrow-alt-circle-up"></i> To the
                                top</a>
                        </div>
                        <div className="pt-3">
                            <i className="fab fa-facebook-square"></i>&nbsp;
                            <i className="fab fa-instagram"></i>&nbsp;
                            <i className="fab fa-snapchat"></i>&nbsp;
                            <i className="fab fa-pinterest-p"></i>&nbsp;
                            <i className="fab fa-twitter"></i>&nbsp;
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                        <div>Powered by DEVCAMP</div>
                    </div>
                </div>
            </>
        )
    }
}

export default FooterComponent