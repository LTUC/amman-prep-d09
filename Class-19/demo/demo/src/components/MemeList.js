
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MemeModal from './MemeModal';
import UpdateModal from './UpdateModal';

function MemeList(props) {

    const [showFlag,setShowFlag] = useState(false);
    const [updateFlag,setUpdateFlag] = useState(false);
    const [newArr, setNewArr] =useState([]);
    
    // console.log("MemeList",newArr);
    const [clickedMeme, setClickedMeme] = useState({});
    const handleShow = (item) =>{
        console.log(item);
        setClickedMeme(item);
        setShowFlag(true);
    }

    const showUpdateModal= (item) =>{
        setUpdateFlag(true);
        setClickedMeme(item);
        console.log(item);
    }

    const closeUpdateModal = () =>{
        setUpdateFlag(false);
    }

    const handleclose = () =>{
        setShowFlag(false);
    }

    const takeNewArrFromChild = (arr) => {
        // console.log("parent Comp",arr);
        // props.takeNewArr(arr);
        setNewArr(arr);
    }

   

    useEffect(()=>{
        setNewArr(props.favArr);
    }, [props.favArr])
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {newArr.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image_path} />
                            <Card.Body>
                                <Card.Title>{item.meme_name}</Card.Title>
                                <Card.Text>
                                    <p>{item.top_text}</p>
                                    <p>{item.tags}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => {handleShow(item)}}>More</Button>
                                <Button variant="success" onClick={() =>{showUpdateModal(item)}}>Update</Button>
                                <Button variant="danger">Delete</Button>


                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

            <MemeModal showFlag={showFlag} handleclose={handleclose} memeData={clickedMeme}/>
            <UpdateModal updateFlag={updateFlag} closeUpdateModal={closeUpdateModal} item={clickedMeme} takeNewArrFromChild={takeNewArrFromChild}/>

        </>
    )
}

export default MemeList;