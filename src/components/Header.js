import { Link, NavLink } from "react-router-dom"
import { closeicon, logo, showicon } from "./Images"
import '../assets/css/header.css'
import { memo, useContext, useState } from "react"
import GlobalState from "../Context"
function Header() {
    const [connect, setConnect] = useState(false)
    const { isShow, setIsShow } = useContext(GlobalState)
    return <>
        <header>
            <div className="shadow">
                .
            </div>
            <div className="custom-header">
                <div className="head-flex">
                    <div className="logo-section">
                        <img src={logo} />
                    </div>
                    <img src={showicon} className="mobile-head-open" onClick={(e) => setIsShow(true)}/>
                </div>
                <div className="header-100-vh">
                <div className={isShow ? "header-body nav-open" : "header-body nav-close"}>
                    <div className="mobile-head">
                        <img src={logo} className="sm-logo"/>
                        <img src={closeicon} className="close-icon" onClick={(e) => setIsShow(false)}/>
                    </div>
                    <ul className="ul">
                        <li className="custom-order-3">
                            <a href="https://github.com/citymonks" target="_blank" className="active">Manifest</a>
                        </li>
                        <li className="custom-order-1">
                            <div className="custom-dropdown">
                                <a href="#" >Network</a>
                                <div className="dropdown-body">
                                    <ul>
                                        <li>
                                            <a href="#network-about">About</a>
                                        </li>
                                        <li>
                                            <a href="#network-tokenomics">Tokenomics</a>
                                        </li>
                                        <li>
                                            <a href="#network-roadmap">Roadmap</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="custom-order-2">
                        <div className="custom-dropdown">
                            <a href="#">Brotherhood</a>
                            <div className="dropdown-body">
                                    <ul>
                                        <li>
                                            <a href="https://opensea.io/citymonk" target="_blank">Labs</a>
                                        </li>
                                        <li>
                                            <a href="https://synod.citymonk.io/" target="_blank">Synod</a>
                                        </li>
                                        <li>
                                            <a href="https://snapshot.io/#/citymonk" target="_blank">Voting</a>
                                        </li>
                                        <li>
                                            <a href="mailto:hello@citymonk.io" target="_blank">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <div className="custom-order-4 m-d-none">
                            <li >
                                <a href="mailto:hello@citymonk.io" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                            </li>
                            <li>
                                <a href="https://discord.gg/wywkhGByRR" target="_blank"><i class="fa-brands fa-discord"></i></a>
                            </li>
                        </div>
                    </ul>
                    <ul className="ul mobile-social">
                            <li >
                                <a href="mailto:hello@citymonk.io" target="_blank"><i class="fa-solid fa-envelope"></i></a>
                            </li>
                            <li>
                                <a href="https://discord.gg/wywkhGByRR" target="_blank"><i class="fa-brands fa-discord"></i></a>
                            </li>
                    </ul>
                </div>
                </div>
            </div>
        </header>
    </>
}

export default memo(Header)