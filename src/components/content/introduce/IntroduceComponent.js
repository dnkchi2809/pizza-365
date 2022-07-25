import { Grid } from "@mui/material"

import Carousel from 'react-bootstrap/Carousel';

function IntroduceComponent() {
    return (
        <>
            {/*Logo slogan*/}
            <Grid className="row mt-5 mt-5 mb-1">
                <Grid className="col-2">
                    <img src={require("../../../../src/images/pizza-logo.jpg")} className="square" alt="logo" />
                </Grid>
                <Grid className="col ml-2 p-0 d-flex align-items-center">
                    <Grid className="col">
                        <Grid className="row">
                            <p className="h1 text-warning">&nbsp; PIZZA 365</p>
                        </Grid>
                        <Grid className="row">
                            <p className="h3 text-warning">&nbsp;&nbsp;&nbsp;<i>Truly Italian!</i></p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


            {/*slide*/}
            {/* Carousel*/}
            <Grid className="row">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../../../src/images/slide/pizza-1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../../../src/images/slide/pizza-2.jpg")}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../../../src/images/slide/pizza-3.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../../../src/images/slide/pizza-4.jpg")}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Grid>

            {/*Tại sao piza*/}
            <Grid className="row mt-5 mb-3 justify-content-center">
                <h3 className="text-warning text-underline">Tại sao nên chọn Pizza 365</h3>
            </Grid>
            <Grid className="row">
                <table className="w-100">
                    <td className="border border-warning p-4 w-25" style={{ backgroundColor: "lightgoldenrodyellow" }}>
                        <h3>Đa dạng</h3>
                        <p>Số lượng pizza đa dạng, có đầy đủ các loại pizza đang hot nhất hiện nay</p>
                    </td>
                    <td className="border border-warning p-4 w-25" style={{ backgroundColor: "yellow" }}>
                        <h3>Chất lượng</h3>
                        <p>Nguyên liệu sạch 100% rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm</p>
                    </td>
                    <td className="border border-warning p-4 w-25" style={{ backgroundColor: "lightsalmon" }}>
                        <h3>Hương vị</h3>
                        <p>Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365</p>
                    </td>
                    <td className="border border-warning p-4 w-25" style={{ backgroundColor: "orange" }}>
                        <h3>Dịch vụ</h3>
                        <p>Nhân viên thân thiện, nhà hàng hiện đại. Dịch vụ giao hàng nhanh chất lượng, tân tiến</p>
                    </td>
                </table>
            </Grid>
        </>
    )
}
export default IntroduceComponent;