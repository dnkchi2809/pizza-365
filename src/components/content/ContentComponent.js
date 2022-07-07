import { Component } from "react";

import IntroduceComponent from "./introduce/IntroduceComponent";
import SizeComponent from "./size/SizeComponent";
import TypeComponent from "./type/TypeComponent";
import DrinkComponent from "./drink/DrinkComponent";
import FormComponent from "./form/FormComponent";

class ContentComponent extends Component {
    render() {
        return (
            <>
                {/*body*/}
                <div className="container-fluid pt-3">
                    <IntroduceComponent/>
                    <SizeComponent/>
                    <TypeComponent/>
                    <DrinkComponent/>  
                    <FormComponent/>            
                </div>
            </>
        )
    }
}

export default ContentComponent