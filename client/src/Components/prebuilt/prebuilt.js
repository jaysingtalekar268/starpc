import { Container, Row, Card, Col } from "react-bootstrap";
import pc_img from '../images/pc_img.jpg';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Prebuilt() {


    const [productData, setPData] = useState("");
    const isLoading = useRef(true); // Loading state
    const navigate = useNavigate();

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


    const GetPrebuiltPCProduct = () => {
        if (productData) {
            return (

                productData.map((product, index) => product.p_type == "prebuilt" ?
                    <Card className='cardContainer' key={index + 10000} >
                        <Card.Body className='cardBody' key={index + 20000}>
                            <Card.Img className='cardImg' key={index + 30000} src={images[product.img[0]]}></Card.Img>
                            <Card.Title className='cardTitle' key={index + 40000}>{product.name + "price" + product.price}</Card.Title>
                            <button key={index + 500} onClick={() => navigate('/productdisplay', {state: {product_id:product._id}})}>View Spece</button>
                    </Card.Body>
                    </Card >
                    : null)


            );
}
        else {
    return (<p>data loading</p>)
}
    }

return (
    <Container>
        <Row>
            <Col>
                <h1>pre built pcs</h1>
                <GetPrebuiltPCProduct></GetPrebuiltPCProduct>

            </Col>
        </Row>
    </Container>
);
}

export default Prebuilt;