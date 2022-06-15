import { memo } from "react";
import { banner } from "./Images"

function Banner()
{
    return <>
    <section className="banner-section">
    <div className="banner-text">
        <img src={banner} className="banner-img"/>
        <h1>CITYMONK</h1>
        <div className="flex-text">
            <p>Parts of real world stored on your ledger </p>
            <p> DECENTRALIZED NETWORK</p>
        </div>
    </div>
    </section>
    </>
}
export default memo(Banner);