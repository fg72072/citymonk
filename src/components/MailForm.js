import { memo, useState } from "react";
import { Container, Form, Row,Col } from "react-bootstrap"
import { arrow } from "./Images"

const MailForm = ({ children,status, message, onValidated }) => {
    const [email, setEmail] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
    });

}
return(
    <Form onSubmit={(e) => handleSubmit(e)}>
    <Row>
        <Col lg={5} md={6}>
            <Form.Group className="custom-from-group" controlId="prenom">
                <Form.Label>PRENOM</Form.Label>
                <Form.Control value={firstName} onChange={(e)=>setFirstName(e.target.value)} required type="text" className="custom-from-group-placeholder" placeholder="John" />
            </Form.Group>
        </Col>
        <Col lg={5} md={6}>
            <Form.Group className="custom-from-group" controlId="nom">
                <Form.Label>NOM</Form.Label>
                <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} required type="text" className="custom-from-group-placeholder" placeholder="Doe" />
            </Form.Group>
        </Col>
        <Col lg={5} md={6}>
            <Form.Group className="custom-from-group" controlId="email">
                <Form.Label>E-MAIL</Form.Label>
                {/* <Form.Control type="email" className="custom-from-group-placeholder"placeholder="John.doe@gmail.com" /> */}
                <Form.Control required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="custom-from-group-placeholder"placeholder="John.doe@gmail.com" />
                <div className="news-letter">
                    {status === "sending" && <div className="news-message" style={{ color: "white" }}>sending...</div>}
                    {status === "error" && <div className="news-message" style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div className="news-message" style={{ color: "green" }}>Subscribed !</div>}
                    <button formValues={[firstName,lastName,email]} className="normal-btn-with-icon mt-4"><span>Submit</span> <img src={arrow}/></button>
                </div>
            </Form.Group>
        </Col>
            {/* <div className="custom-from-group mt-5">
            <a href="#" className="normal-btn-with-icon mt-4"><span>Submit</span> <img src={arrow}/></a>
            </div> */}
    </Row>
    </Form>
)
}

export default memo(MailForm)