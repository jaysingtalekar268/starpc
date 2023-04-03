import { Card, Row, Col, Container, Button } from "react-bootstrap";
import cpu_logo from '../images/cpu_logo.png'
import pc_img from '../images/pc_img.jpg';
import './pcbuild.css';

function Pcbuild() {
    const username = JSON.parse(localStorage.getItem("user"));


    return (


        <Container className="mainDiv">
            <Row>
                <img src={pc_img}></img>
            </Row>
            <Row className="cardDiv">
                <h1>
                    build you PC online | Customize your PC
                </h1>
                <Col className="cardCol" lg={8}>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Processor</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Motherboard</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Ram</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Storage 1</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Storage 2</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select CPU</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Cabinet</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Cabinet Fan</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Grahics Card</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Monitor</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Keyboard</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Mouse</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>
                    <Card className='cardContainer'>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>Select Accessories</Card.Title>
                            <Card.Img className='cardImg' src={cpu_logo}></Card.Img>

                        </Card.Body>
                    </Card>

                </Col>
                <Col className="cartCol">
                    <Container className="cartContainer">
                        <span> Total {506} </span>
                        <Button className="cartAddBtn " variant='success'>Add To Cart</Button>
                        <Button className="cartRemBtn" variant='danger'>Remove All</Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Pcbuild;