import { Card, Row, Col, Carousel, Container, Tab, Tabs } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';


import pc_img from '../images/pc_img.jpg';
import Footer from '../footer/footer';
import './home.css';

function Home() {
    const [index, setIndex] = useState(0);
    const [key, setKey] = useState('latest');
    const isLoading = useRef(true); // Loading state

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [productData, setPData] = useState("");
    const [productCatgList, setPCList] = useState("");
    const [productBrandList, setPBList] = useState("");

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
            console.warn(productResult);
            setPData(productResult);
            let temp = [];

            productResult.map(x => temp.push(x.catg));
            setPCList([...new Set(temp)]);
            temp = [];

            productResult.map(x => temp.push(x.brand));
            setPBList([...new Set(temp)]);
            isLoading.current = false;

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
                <Carousel activeIndex={index} onSelect={handleSelect} key={index+400}>

                    {productData.map((product, index) =>

                        <Carousel.Item key={index + 100}>
                            <img key={index + 200}
                                className="d-block w-100"
                                // src={imgList[1]}
                                src={images["pc1.jpg"]}
                                alt={""}
                            />
                            <Carousel.Caption key={index + 300}>
                                <h3>{product.name}</h3>
                                <p>{product.desc}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       

            )
        }
         </Carousel>
                );



}
        else {
    return (<p>data loading</p>)
}
    }
const GetOfferProduct = () => {
    if (productData) {
        return (

            productData.map((product, index)  => product.offer == "on" ?
                <Card className='cardContainer' key={index + 1000}>
                    <Card.Body className='cardBody' key={index + 2000}>
                        <Card.Img className='cardImg' key={index + 3000} src={images[product.img[0]]}></Card.Img>
                        <Card.Title className='cardTitle' key={index + 4000} >{product.name + "price" + product.price}</Card.Title>
                    </Card.Body>
                </Card>
                : null)


        );
    }
    else {
        return (<p>data loading</p>)
    }
}
const GetPrebuiltPCProduct = () => {
    if (productData) {
        return (

            productData.map((product, index)  => product.p_type == "prebuilt" ?
                <Card className='cardContainer' key={index + 10000} >
                    <Card.Body className='cardBody' key={index + 20000}>
                        <Card.Img className='cardImg' key={index + 30000} src={images[product.img[0]]}></Card.Img>
                        <Card.Title className='cardTitle' key={index + 40000}>{product.name + "price" + product.price}</Card.Title>
                        <button key={index + 500}>View Spece</button>
                    </Card.Body>
                </Card>
                : null)


        );
    }
    else {
        return (<p>data loading</p>)
    }
}
const GetOfferProductCatg = () => {
    if (productData) {
        return (

            productCatgList.map((product, index) =>
                <Card className='cardContainer' key={index + 100000} >
                    <Card.Body className='cardBody' key={index + 200000}>
                        <Card.Img className='cardImg' key={index + 300000} src={images["pc_img.jpg"]}></Card.Img>
                        <Card.Title className='cardTitle' key={index + 400000}>{product}</Card.Title>

                    </Card.Body>
                </Card>
            )


        );
    }
    else {
        return (<p>data loading</p>)
    }
}
const GetOfferProductBrand = () => {
    if (productData) {
        return (


            <Carousel activeIndex={index} onSelect={handleSelect}>
                {productBrandList.map( (product,index) =>
                    <Carousel.Item key={index+1000000}>
                        <img
                            className="d-block w-100"
                            // src={imgList[1]}
                            src={images["pc_img.jpg"]}
                            alt={""}
                        />
                        <Carousel.Caption key={index+2000000}>
                            <h3>{product}</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        )



    }
    else {
        return (<p>data loading</p>)
    }
}
const GetCustomerReview=()=>
{
    if (productData) {
        return (


            <Carousel activeIndex={index} onSelect={handleSelect}>
                {productBrandList.map( (product,index) =>
                    <Carousel.Item key={index+1000000}>
                        <img
                            className="d-block w-100"
                            // src={imgList[1]}
                            src={images["pc_img.jpg"]}
                            alt={""}
                        />
                        <Carousel.Caption key={index+2000000}>
                            <h3>{product}</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        )



    }
    else {
        return (<p>data loading</p>)
    }
}

if (productData) {
    return (
        <Container fluid className='homeContainer' >
            <Row className='firstRow' >
                <Col>

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={images["rtx40.webp"]}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={images["ultra.jpg"]}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={images["NVIDIA-GeForce-RTX-30-Series-Battlefield-2024-Game-Bundle.jpg"]}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>




                </Col>
            </Row>
            <Row>
                <Col>
                    <ul >
                       <img className='a' src={images["truck.png"]} alt='truck'></img>
                       <h5 className='a'>All India Shopping</h5>
                       <img className='a'src={images["lock.png"]} alt="lock"></img>
                       <h5 className='a'>Secure checkout </h5>
                       <img className='a'src={images["pc.jpg"]} alt='pc'></img>
                       <h5 className='a'>Experts in PC Building</h5>
                       <img className='a'src={images["tick.png"]} alt='tick'></img>
                       <h5 className='a'>Experts in PC Building</h5>

                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <a><img  className ='lgmo'  src={images["i9.webp"]} alt='pc'></img></a>
                        
                        <a><img className='lgmo' src={images["LGmo.jpg"]} alt='pc'></img></a>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
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
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Special offer</h1>
                    <GetOfferProduct></GetOfferProduct>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Pre Build PC</h1>
                    <GetPrebuiltPCProduct></GetPrebuiltPCProduct>

                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Featured Categoreis</h1>

                    <GetOfferProductCatg></GetOfferProductCatg>

                </Col>
            </Row>

            <Row>
                <Col>
                    <h1>Featured Brands</h1>
                    <GetOfferProductBrand></GetOfferProductBrand>

                </Col>
            </Row>
            
            <Row>
                <Col>
                    <img src={images["pc_img.jpg"]}></img>
                    <img src={images["pc_img.jpg"]}></img>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>About us</h1>
                    <p> lorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lormelorem lorme </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>cUSTOMER ABOUT STARTPC</h1>
                  <GetCustomerReview></GetCustomerReview>
                </Col>
            </Row> 
            <Footer></Footer>
        </Container>
    );
}
else {
    <p>data loading</p>
}
}

export default Home;