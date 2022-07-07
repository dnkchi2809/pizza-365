import { Grid } from "@mui/material"

import IntroduceComponent from "./introduce/IntroduceComponent";
import SizeComponent from "./size/SizeComponent";
import TypeComponent from "./type/TypeComponent";
import DrinkComponent from "./drink/DrinkComponent";
import FormComponent from "./form/FormComponent";

function ContentComponent() {
        return (
            <>
                {/*body*/}
                <Grid className="container-fluid pt-3">
                    <IntroduceComponent/>
                    <SizeComponent/>
                    <TypeComponent/>
                    <DrinkComponent/>  
                    <FormComponent/>            
                </Grid>
            </>
        )
}

export default ContentComponent