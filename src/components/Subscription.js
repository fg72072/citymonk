import { Container, Form, Row,Col } from "react-bootstrap"
import { arrow } from "./Images"

function Subscription() {
    return <>
        <section className="section bottom-padding">
            <div className="secondary-shadow">
                .
            </div>
            <Container>
                <h2 className="section-title">
                    SUBSCRIBE
                </h2>
                <Form>
                    <Row>
                        <Col lg={6} md={6}>
                            <Form.Group className="custom-from-group" controlId="prenom">
                                <Form.Label>PRENOM</Form.Label>
                                <Form.Control type="text" className="custom-from-group-placeholder" placeholder="John" />
                            </Form.Group>
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Group className="custom-from-group" controlId="nom">
                                <Form.Label>NOM</Form.Label>
                                <Form.Control type="text" className="custom-from-group-placeholder" placeholder="Doe" />
                            </Form.Group>
                        </Col>
                        <Col lg={6} md={6}>
                            <Form.Group className="custom-from-group" controlId="email">
                                <Form.Label>E-EMAIL</Form.Label>
                                <Form.Control type="email" className="custom-from-group-placeholder"placeholder="John.doe@gmail.com" />
                            </Form.Group>
                        </Col>
                            <div className="custom-from-group">
                            <a href="#" className="normal-btn-with-icon"><span>Submit</span> <img src={arrow}/></a>
                            </div>
                    </Row>
                </Form>
            </Container>
            <div className="bottom-padding">

            </div>
        </section>
    </>
}

export default Subscription