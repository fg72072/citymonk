import { Col, Container, Row } from "react-bootstrap"
import '../assets/css/footer.css'
import { arrow } from "./Images"
function Footer()
{
    return <>
    <footer>
        <Container>
            <Row>
                <Col lg={3} md={4}>
                    <h3>NETWORK</h3>
                    <ul className="ul">
                        <li>
                        <a href="#network-about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#network-tokenomics">TOKENOMICS</a>

                        </li>
                        <li>
                            <a href="#network-roadmap">ROADMAP</a>

                        </li>
                    </ul>
                </Col>   
                <Col lg={3} md={4}>
                    <h3>BROTHERHOOD</h3>
                    <ul className="ul">
                        <li>
                        <a href="https://opensea.io/citymonk" target="_blank">LABS</a>
                        </li>
                        <li>
                        <a href="https://synod.citymonk.io/" target="_blank">SYNOD</a>
                        </li>
                        <li>
                        <a href="https://snapshot.io/#/citymonk" target="_blank">VOTING</a>
                        </li>
                        <li>
                        <a href="mailto:hello@citymonk.io" target="_blank">CAREER</a>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} md={4}>
                    <h3>RELICTS</h3>
                    <ul className="ul">
                        <li>
                        <a href="https://github.com/citymonks" target="_blank" className="footer-active normal-btn-with-icon"><span>Manifest</span> <img src={arrow}/></a>

                        </li>
                    </ul>
                </Col>
                <hr/>
            </Row>
            <div className="footer-bottom">
                <div>
                    <p className="text-white">© 2022 CityMonk</p>
                </div>
                <ul className="social-links">
                    <li>
                        <a href="mailto:hello@citymonk.io" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                    </li>
                    <li>
                        <a href="https://discord.gg/wywkhGByRR" target="_blank"><i class="fa-brands fa-discord"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/citymonks" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/citymonks" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
    </>
}

export default Footer