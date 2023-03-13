
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MemeModal from './MemeModal';

function MemeList(props) {

    const [showFlag,setShowFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    const handleShow = (item) =>{
        console.log(item);
        setClickedMeme(item);
        setShowFlag(true);
    }

    const handleclose = () =>{
        setShowFlag(false);
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favArr.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image_path} />
                            <Card.Body>
                                <Card.Title>{item.meme_name}</Card.Title>
                                <Card.Text>
                                    <p>{item.top_text}</p>
                                    <p>{item.tags}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => {handleShow(item)}}>more options</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

            <MemeModal showFlag={showFlag} handleclose={handleclose} memeData={clickedMeme}/>
        </>
    )
}

export default MemeList;