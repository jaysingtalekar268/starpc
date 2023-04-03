import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>News Letter</h1>
                    <p>Stay up to date with news and promotions by signing up for our newsletter</p>
                    <input placeholder="Email"></input>
                    <button > Signup</button>
                </Col>
            </Row>
            <Row>

                <Col>Map</Col>
                <Col> <h2>USeful links</h2>
                    <ul>
                        <li>SHop</li>
                        <li>New Arrivals</li>
                        <li>PC Build</li>
                        <li>Pre Built PC</li>
                    </ul>
                </Col>
                <Col><h2>My Account</h2>
                    <ul>
                        <li>Track your ORder</li>
                        <li>Orders History</li>
                        <li>My Profile</li>
                        <li>cart</li>
                        <li>checkout</li>
                    </ul>
                </Col>
                <Col><h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Contact US</li>
                        <li>Store Location</li>
                        <li>Terms &  Conditions</li>
                        <li>Privacy Statement</li>
                        <li>Refund Policy</li>
                        <li>FAQs</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>
                        Copyright © 2023 starpc.in | Jaysing Talekar | All rights reserved.

                    </h2>
                    
                </Col>
            </Row>


        </Container>
    );
}

export default Footer;