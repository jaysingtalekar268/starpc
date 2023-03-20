import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import './account.css';
import { useEffect, useState } from "react";
import Orders from "../Orders/orders";
import Sign from "../session/session";
function Account() {
    let [userexist, setuser] = useState(false);
    let [username, setusername] = useState("");
    let [useremail, setuseremail] = useState("");
    let [userphone, setuserphone] = useState("");
    const userdata = async () => {
        let result = await fetch('http://localhost:3001/checkuser', {
            method: 'post',
            body: JSON.stringify(),
            headers: {
                'Content-type': 'application/json'
            }

        });

        result = await result.json();
        if (result.name) {
            // alert(result.name);
            setuser(true);
            setusername(result.name);
            setuseremail(result.email);
            setuserphone(result.phone);
        }
        else {
            setuser(false);

        }
    }
    userdata();
    const logout = async () => {
        let logoutresult = await fetch('http://localhost:3001/signout', {
            method: 'post',
            body: JSON.stringify(),
            headers: {
                'Content-type': 'application/json'
            }
        });
        logoutresult = await logoutresult.text();
        console.warn(logoutresult);
    };
    const [tabKey, setTab] = useState('Personal');
    if (userexist) {
        return (
            <Container className="mainContainer">
                <Row>
                    <Col className="accountMenu" lg={1}>
                        <ul>
                            <li className="menuItem"><a className="menuLink" onClick={() => setTab("Personal")}> Personal </a></li>
                            <li className="menuItem"><a className="menuLink" onClick={() => setTab("Orders")}> Orders</a></li>
                            <li className="menuItem"><a className="menuLink" onClick={() => setTab("Payment")}> Payment</a></li>
                            <li className="menuItem"><a className="menuLink" onClick={() => setTab("Security")}> Security</a></li>
                            <li className="menuItem"><a className="menuLink" onClick={() => logout()}> Logout</a></li>
                        </ul>
                    </Col>
                    <Col className="accountMenuInfo">
                        <Container>
                            <Tabs activeKey={tabKey}>
                                <Tab eventKey="Personal" >
                                    <span className="personalItem">Name {username}</span>
                                    <span className="personalItem">Email {useremail}</span>
                                    <span className="personalItem">Mobile {userphone}</span>
                                </Tab>
                                <Tab eventKey="Orders" ><Orders></Orders>                    </Tab>
                            </Tabs>
                        </Container>
                    </Col>
                    <Col className="accountInfo">hf</Col>
                </Row>
            </Container>
        );
    }
    else {
        return (<Sign></Sign>);
    }
}

export default Account;