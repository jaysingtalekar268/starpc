import { Card } from 'react-bootstrap';
import pc_img from '../images/pc_img.jpg';
import './home.css';
function Home()
{
    return (
        <div className='homeDiv' > 
            <a className='cardLink' href=''>
            <Card className='cardContainer'>
                <Card.Body className='cardBody'>
                    <Card.Img className='cardImg' src={pc_img}></Card.Img>
                    <Card.Title className='cardTitle'>hello</Card.Title>
                </Card.Body>
            </Card>
            </a>
            <a className='cardLink' href=''>
            <Card className='cardContainer'>
                <Card.Body className='cardBody'>
                    <Card.Img className='cardImg' src={pc_img}></Card.Img>
                    <Card.Title className='cardTitle'>hello</Card.Title>
                </Card.Body>
            </Card>
            </a>
            <a className='cardLink' href=''>
            <Card className='cardContainer'>
                <Card.Body className='cardBody'>
                    <Card.Img className='cardImg' src={pc_img}></Card.Img>
                    <Card.Title className='cardTitle'>hello</Card.Title>
                </Card.Body>
            </Card>
            </a>
            <a className='cardLink' href=''>
            <Card className='cardContainer'>
                <Card.Body className='cardBody'>
                    <Card.Img className='cardImg' src={pc_img}></Card.Img>
                    <Card.Title className='cardTitle'>hello</Card.Title>
                </Card.Body>
            </Card>
            </a>
            <a className='cardLink' href=''>
            <Card className='cardContainer'>
                <Card.Body className='cardBody'>
                    <Card.Img className='cardImg' src={pc_img}></Card.Img>
                    <Card.Title className='cardTitle'>hello</Card.Title>
                </Card.Body>
            </Card>
            </a>
            

        </div>
    );
}

export default Home;