import axios from "axios";
import { useEffect, useState } from "react";
import Flower from "./Flower";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {

    const [flowersArr, setFlowersArr] = useState([]);

    const getAllFlowers = async () => {
        const serverURL = process.env.REACT_APP_serverURL;
        const response = await axios.get(`${serverURL}/allFlowers`);
        setFlowersArr(response.data);
    }

    useEffect(() => {
        getAllFlowers();
    }, [])

    return (
        <>
            <h1>Flowers Collections</h1>
            <Row xs={1} md={4} className="g-4">
                {flowersArr.map((item) => {
                    return (
                        <Col>
                            <Flower item={item} parentComp="Home"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Home;