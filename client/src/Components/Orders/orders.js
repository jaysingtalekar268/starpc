import { Container, Card, Dropdown, FormGroup } from "react-bootstrap";
import './orders.css';
import { ChevronContract, Filter } from 'react-bootstrap-icons';
function Orders() {

    return (
        <Container>
            <Container className="orderBar">
                <h3 className="heading">Your Orders</h3>
                <Dropdown className="orderFilter ">
                    <Dropdown.Toggle variant=""><Filter></Filter></Dropdown.Toggle>
                </Dropdown>
            </Container>

            <Card className="mainCard">
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">11 May</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mainCard">
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">11 May</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mainCard">
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">11 May</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mainCard">
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">11 May</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mainCard">
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">11 May</Card.Text>
                </Card.Body>
            </Card>
            <Card className="mainCard">
                <Card.Body className="cardBody">
                    <Card.Text className="cardText">11 May</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Orders;