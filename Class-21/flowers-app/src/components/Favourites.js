import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flower from "./Flower";

function Favourites() {

    const [favFlowersArr, setFavFlowersArr] = useState([]);
    
    const getFavFlowers = async () =>{
        const serverURL = process.env.REACT_APP_serverURL;
        const response = await axios.get(`${serverURL}/allFavFlowers`);
        setFavFlowersArr(response.data)
    }

    useEffect(()=>{
        getFavFlowers();
    }, [favFlowersArr])
    
    return(
        <>
            <h1>Favourite List</h1>
            <Row xs={1} md={4} className="g-4">
                {favFlowersArr.map((item) => {
                    return (
                        <Col>
                            <Flower item={item} parentComp="Favourites"/>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Favourites;