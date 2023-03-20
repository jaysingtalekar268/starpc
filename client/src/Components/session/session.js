import { useState } from "react";
import { Container } from "react-bootstrap";
import './session.css';
import { json, useNavigate } from 'react-router-dom';

function Sign() {
    const [name, setusername] = useState("");
    const [password, setuserpassword] = useState("");
    const navigate = useNavigate();

    const signcheck = async () => {
        console.warn("un " + name + " up " + password);
        let userdata = await fetch("http://localhost:3001/signin", {
            method: 'post',
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        userdata = await userdata.json();
        if (userdata.name) {
            // navigate('/');

        }
        else {
            alert("username or password is wrong");
        }

       

    };

    const checkuser = async () => {
        let tempuser = await fetch("http://localhost:3001/checkuser", {
            method: "post",
            body: JSON.stringify({ name, password }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        tempuser = await tempuser.json();
        console.warn(tempuser);

        // if (tempuser.name) {
        //     console.warn(tempuser);
        // }
        // else {
        //     console.warn("check user not working ");

        // }
    }
    return (
        <Container>
            
            <input onChange={(e) => setusername(e.target.value)} type='text' className="formInput" placeholder="enter username" ></input>
            <span></span>
            <input onChange={(e) => setuserpassword(e.target.value)} type="password" className="formInput" placeholder="enter password" ></input>
            <span></span>
            <button className="formBtn" onClick={signcheck}>Sign In</button>
            <button className="formBtn" onClick={checkuser}>check</button>
            
        </Container>
    );
}

export default Sign;