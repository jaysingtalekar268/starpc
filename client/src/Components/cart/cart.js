import { Container, Table, Card, Row, Col, Tab, Tabs } from "react-bootstrap";
import Footer from "../footer/footer";
import { useEffect, useState, useRef, useTransition } from 'react';

function Cart() {

    const username = JSON.parse(localStorage.getItem("user"));

    const [key, setKey] = useState('latest');
    const [productData, setPData] = useState("");
    const [cartData, setCData] = useState("");
    const isLoading = useRef(true); // Loading state

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

        }
    };
    const getcart = async () => {

        let cartResult = await fetch("http://localhost:3001/getcart", {
            method: "post",
            body: JSON.stringify({
                _id: username._id
            }),
            headers: {
                'Content-type': 'application/json'
            }

        })

        cartResult = await cartResult.json();
        if (cartResult && productData) {

            console.warn("cr", cartResult);
            // setCData(cartResult);
            // console.warn("cart matching");
            // console.warn(cartData.map(cart_item => cart_item));

            // console.warn(productData.map(product_item => product_item));

            // console.warn(cartData.filter(cart_item=> cart_item.cart.map( p_id =>  ) ));
            // console.warn(productData.filter(product_item=> cartData.filter(cart_item => cart_item.cart.map(c => product_item._id) ).filter(y=>y) ));
            setCData(Array.isArray(cartResult) ? cartResult[0].cart.map(x => productData.filter(y => y._id == x).map(y => y)) : []);


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

    useEffect(() => {

        getcart();



    }, [productData]);

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

    const LoadCartTable = () => {
        if (cartData) {
            return (<Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>

                <tbody>
                    {cartData.map( (cart_item,index)=>
                        <tr key={index+100} >
                            <td>{index}</td>
                            <td>{cart_item[0].name}</td>
                            <td>{cart_item[0].price}</td>
                            <td>{cart_item[0].price}</td>
                            <td>450</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            );
        }
        else {
            return (
                <p>cart data loading</p>
            );
        }
    };

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('../images', false, /\.(png|jpe?g|webp|svg)$/));


    return (
        <Container>
            <Row>
                <Col>
                    <a><img src={images["bite_back.webp"]}></img></a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <LoadCartTable></LoadCartTable>

                </Col>
                <Col>
                    <span>Cart Total</span>
                    <span>Sub Total ₹</span>
                    <span>Shipping Total ₹</span>
                    <span>Total ₹</span>
                </Col>
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
        </Container>
    );
}

export default Cart;