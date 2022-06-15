import { Link, NavLink } from "react-router-dom"
import { logo } from "./Images"
import '../assets/css/header.css'
import { memo, useContext, useState } from "react"
import GlobalState from "../Context"
import Onboard from 'bnc-onboard';
function Header() {
    const [connect, setConnect] = useState(false)
    const { isShow, setIsShow } = useContext(GlobalState)
    const connectWalletPressed = async () => {
        const onboard = Onboard({
          dappId: 'e5dce034-797e-4871-8a93-ef69730dca19', //e5dce034-797e-4871-8a93-ef69730dca19
          networkId: 1,
          darkMode: true,
          subscriptions: {
            wallet: async (wallet) => {
              if (wallet.provider) {
                setConnect(true)
              } else {
                setConnect(false)
              }
            }
          },
          // walletSelect: {
          //   wallets: [{
          //     walletName: 'metamask'
          //   }]
          // }
          walletSelect: {
            wallets:[
              {
                walletName: "metamask",
                preferred: true,
              },
              {
                walletName: "trust",
                preferred: true,
              },
              {
                walletName: 'walletConnect',
                preferred: true,
                infuraKey: 'cea9deb6467748b0b81b920b005c10c1',
                bridge: 'https://bridge.walletconnect.org',
              },
              {
                walletName: 'torus',
              },
              {
                walletName: 'tally',
              },
              {
                walletName: 'status',
              },
              {
                walletName: 'alphawallet',
              },
              {
                walletName: 'atoken',
              },
              {
                walletName: 'blockwallet',
              },
              {
                walletName: 'coinbase',
              }
            ]
          }
        })
        await onboard.walletSelect()
        await onboard.walletCheck()
    
      };
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
                    <i class="fa-solid fa-bars mobile-head-open" onClick={(e) => setIsShow(true)}></i>
                </div>
                <div className="header-100-vh">
                <div className={isShow ? "header-body nav-open" : "header-body nav-close"}>
                    <div className="mobile-head">
                        <img src={logo} />
                        <i class="fa-solid fa-close" onClick={(e) => setIsShow(false)}></i>
                    </div>
                    <ul className="ul">
                        <li className="custom-order-3">
                            <NavLink to={"/"}>Manifest</NavLink>
                        </li>
                        <li className="custom-order-1">
                            <div className="custom-dropdown">
                                <a href="#" >Network</a>
                                <div className="dropdown-body">
                                    <ul>
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
                                </div>
                            </div>
                        </li>
                        <li className="custom-order-2">
                        <div className="custom-dropdown">
                            <a href="#">Brotherhood</a>
                            <div className="dropdown-body">
                                    <ul>
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