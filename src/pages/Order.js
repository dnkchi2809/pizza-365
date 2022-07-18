import { Container } from "reactstrap";
import OrderTable from "../components/content/order/OrderTable";

function Order() {
    return (
        <Container className="bg-white" style={{marginTop : "7%"}}>
            <OrderTable />
        </Container>
    )
}

export default Order;