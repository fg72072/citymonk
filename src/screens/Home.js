import { Col, Container, Row } from "react-bootstrap"
import { Banner, Footer, Roadmap, SecondSection, SliderSection, Subscription } from "../components"
import { arrow, c, cmobile } from "../components/Images"

function Home() {
    return <main>
        {/* banner section  */}
        <Banner />
        {/* end banner section  */}
        {/* second section  */}
        <SecondSection />
        {/* end second section  */}
        {/* third section */}
        <section className="section common-bottom-padding">
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <div className="daul-flex">
                            <h2 id="network-tokenomics" className="section-title">C¥</h2>
                            <sub>(CYBER YEN)</sub>
                        </div>
                        <p className="normal-p p-mt">
                            The native token of Citymonk network powered by Zero-knowledge cryptography, helps process transactions and further secure.
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="c-img-section">
                        <img src={c} className="c-desktop"/>
                        <img src={cmobile} className="c-mobile"/>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* end third section */}

        {/* slider section  */}
        <SliderSection/>
        {/* end slider section  */}
        
        {/* voting power  */}
        <section className="section bottom-padding get-voting">
            <div className="primary-shadow height-550">
                .
            </div>
            <Container fluid>
                <Row>
                    <Col lg={8}>
                    <h2 className="section-title">GET THE <br/>VOTING POWER</h2>
                    <p className="normal-p">CITYMONK IS OWNED AND GOVERNED BY A COMMUNITY OF NETWORK PARTICIPANTS WHO VOTE ON AND CONTROL THE EVOLUTION OF THE NETWORK.</p>
                    <div className="btn-group-colum">
                    <a href="https://synod.citymonk.io/" target="_blank" className="normal-btn-with-icon"><span>Have a voice</span> <img src={arrow}/></a>
                    <a href="https://snapshot.io/#/citymonk" target="_blank" className="normal-btn-with-icon"><span>Make your proposal</span> <img src={arrow}/></a>
                    <a href="https://github.com/citymonks" target="_blank" className="normal-btn-with-icon"><span>Read tokenomics</span> <img src={arrow}/></a>
                    </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
        {/* end voting power  */}
        
        {/* roadmap  */}
        <Roadmap/>
        {/* end roadmap */}

        {/* subscription  */}
        <Subscription/>
        {/* end subscription  */}

        <Footer/>

    </main>
}

export default Home