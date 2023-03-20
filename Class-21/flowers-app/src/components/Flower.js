import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateForm from './UpdateForm';

function Flower(props) {

    const [showFlag, setShowFlag] = useState(false);

    const deleteFlower = async () => {
        // console.log(props.item.id);
        const serveURL = process.env.REACT_APP_serverURL;
        const response = await axios.delete(`${serveURL}/favFlower/${props.item.id}`);
    }
    const addFavFlower = async () => {

        const serverURL = process.env.REACT_APP_serverURL;
        const obj = {
            name: props.item.name,
            info: props.item.info,
            photo: props.item.photo
        }
        await axios.post(`${serverURL}/favFlower`, obj);

    }

    const showUpdateForm = () => {
        setShowFlag(true);
    }

    const handleClose = () =>{
        setShowFlag(false);
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.photo} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        {props.item.info}
                    </Card.Text>
                    {(props.parentComp == "Home") ? <Button variant="outline-primary" onClick={addFavFlower}>🧡</Button> : ""}
                    {(props.parentComp == "Favourites") ?
                        <>
                            <Button variant="success" onClick={showUpdateForm}>Update</Button>
                            <Button variant="danger" onClick={deleteFlower}>Delete</Button>
                        </>

                        : ""}
                </Card.Body>
            </Card>
            <UpdateForm show={showFlag} handleClose={handleClose} item={props.item}/>
        </>
    )
}

export default Flower;