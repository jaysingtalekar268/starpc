import { Card ,Row,Col, Container, Button} from "react-bootstrap";
import cpu_logo from '../images/cpu_logo.png'
import './pcbuild.css';

function Pcbuild()
{
    return (
      
            
        <div className="mainDiv">

            <Row className="cardDiv">
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
             <Col  className="cartCol">
                <Container className="cartContainer">
                    <span> Total {506} </span>
                    <Button className="cartAddBtn " variant='success'>Add To Cart</Button>
                    <Button className="cartRemBtn" variant='danger'>Remove All</Button>
                </Container>
             </Col>
    </Row>
        </div>
    );
}

export default Pcbuild;