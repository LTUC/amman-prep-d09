// import axios from "axios";

import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {

    const [memesArr, setMemesArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/allMemes`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setMemesArr(data);
    }

    useEffect(()=>{
        sendReq();
    }, [])
    return (
        <>
            <h1>Home</h1>
            {/* <button onClick={sendReq}>send req</button> */}
            <Row xs={1} md={4} className="g-4">
                {memesArr.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <p>{item.topText}</p>
                                    <p>{item.tags}</p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </>
    );
}

export default Home;