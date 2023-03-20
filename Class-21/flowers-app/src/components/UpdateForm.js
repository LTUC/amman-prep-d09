import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function UpdateForm(props) {

    const sendUpdateReq = async (event) => {
        event.preventDefault();
        const obj = {
            name : event.target.name.value,
            photo : event.target.photo.value,
            info : event.target.info.value
        }
        const serverURL = process.env.REACT_APP_serverURL;
        const response = await axios.put(`${serverURL}/favFlower/${props.item.id}`,obj);
        props.handleClose();
    }
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Flower</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={sendUpdateReq}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" defaultValue={props.item.name}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control type="text" name="photo" defaultValue={props.item.photo}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Info</Form.Label>
                        <Form.Control type="text" name="info" defaultValue={props.item.info}/>
                    </Form.Group>

                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateForm;