import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Child(props) {

    const [takenToys, setTakenToys] = useState(0);

    const incrementTakenToys = () =>{
        setTakenToys(takenToys +1);
        //decrement the total number
        props.decrementFun(true);
    }

    return (
        <>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgPath} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <p>Age : {props.age}</p>
                        <p>Number of Taken Toys 🧸 : {takenToys}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={incrementTakenToys}>I need a Toy !</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Child;