import { Container, Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { Dash, Plus } from "react-bootstrap-icons";

import Footer from "../footer/footer";
function ProductDisplay() {

    const navigate = useNavigate();
    const location = useLocation();
    const [key, setKey] = useState('latest');
    const isLoading = useRef(true); // Loading state

    const [productData, setPData] = useState("");
    const [selectedProductData, setSPData] = useState("");
    const [selectedPCount, setSPCount] = useState(1);

    const getproduct = async () => {

        let productResult = await fetch("http://localhost:3001/getproduct", {
            method: "post",
            body: JSON.stringify({

            }),
            headers: {
                'Content-type': 'application/json'
            }

        })

        productResult = await productResult.json();
        if (productResult) {
            // console.warn(productResult);
            setPData(productResult);
            // console.warn("product id",location.state.product_id);
            //    console.warn( productResult.filter(product=>product._id==location.state.product_id));
            setSPData(productResult.filter(product => product._id == location.state.product_id));

        }
    };

    useEffect(() => {
        if (isLoading.current) {
            getproduct();

            isLoading.current = false;

        }
        else {

            // test();

        }
    }, []);



    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|webp|svg)$/));



    const GetTabProduct = () => {
        if (productData) {


            return (


                productData.map((product, index) =>



                    <Card className='cardContainer' key={index + 100000} >
                        <Card.Body className='cardBody' key={index + 200000}>
                            <Card.Img className='cardImg' key={index + 300000} src={images[product.img[0]]}></Card.Img>
                            <Card.Title className='cardTitle' key={index + 400000}>{product.name + product.desc + product.price}</Card.Title>

                        </Card.Body>
                    </Card>


                )


            );



        }
        else {
            return (<p>data loading</p>)
        }
    }


    return <Container>
        <Row>
            <Col>
                <a><img src={images["bite_back.webp"]}></img></a>
            </Col>
        </Row>
        <Row>
            {selectedProductData ?
                <>
                    <Row>
                        <Col><img src={images[selectedProductData[0].img[0]]} ></img></Col>
                        <Col>
                            <span>{"₹" + selectedProductData[0].price}</span>
                            <p>
                                Inclusive of all taxes

                                No Payment Gateway / Convenience Charges
                                EMI Options available at checkout

                            </p>
                            <span>Model No : {selectedProductData[0].model_no}</span>
                            <button onClick={() => setSPCount(selectedPCount - 1)
                            }> <Dash></Dash></button>
                            <input onChange={(e) => setSPCount(e.target.value)} value={selectedPCount}></input>
                            <button onClick={() => setSPCount(selectedPCount + 1)}><Plus ></Plus> </button>
                            <button>Add To Cart</button>
                            <button>Buy Now</button>
                            <p>Usually delivered within 3-4 Business days*</p>
                            <p>All over India Shipping

                                Competitive Pricing

                                Experts in pc building
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Adve</Col>
                        <Col>{selectedProductData[0].desc}</Col>
                    </Row>
                </> : <p>no selected product</p>
            }
        </Row>
        <Row>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >

                <Tab eventKey="latest" title="latest">
                    <GetTabProduct></GetTabProduct>
                </Tab>
                <Tab eventKey="Trending" title="Trending">
                    <GetTabProduct></GetTabProduct>

                </Tab>
                <Tab eventKey="mostselling" title="mose selling" >
                    <GetTabProduct></GetTabProduct>

                </Tab>
                <Tab eventKey="toprated" title="Top Rated" >
                    <GetTabProduct></GetTabProduct>

                </Tab>
            </Tabs>
        </Row>
        <Footer></Footer>
    </Container >
}

export default ProductDisplay;