import { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { arrow } from "./Images"

function SecondSection()
{
    return <>
    <section className="section second-sec bottom-padding">
            <div className="primary-shadow">
                .
            </div>
            <Container>
            <h2 id="network-about" className="section-title">CITYMONK<br/>NETWORK</h2>

                <Row>
                    <Col lg={6} md={6}>
                        <div className="list-box">
                            <h3>Scalability</h3>
                            <p>Offers the best scaling options, providing nearly unlimited transaction capabilities, minimal transaction costs, and an improved user experience.</p>
                        </div>
              
                        
                    </Col>
                    <Col lg={6} md={6}>
                    <div className="list-box">
                            <h3>Multi-VM architecture</h3>
                            <p>Supporting both EVM and WebAssembly on the same platform enables us to support smart contracts like never before.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                   
                        <div className="list-box">
                            <h3>User Tokens Space (UTS)</h3>
                            <p>Users can easily create tokens to tokenize assets while being secured on Citymonk blockchain.</p>
                        </div>
                        
                    </Col>
                    <div className="contribute">
                            <a href="https://github.com/citymonks" target="_blank" className="normal-btn-with-icon"><span>Contribute</span> <img src={arrow}/></a>
                    </div>
                </Row>
            </Container>
        </section>
    </>
}

export default memo(SecondSection)