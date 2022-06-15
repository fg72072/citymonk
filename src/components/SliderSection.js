import { memo } from "react";
import { Container } from "react-bootstrap"
import Slider from "react-slick/lib/slider";
import { arrow, NFT1 } from "./Images";

function SliderSection() {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        autoplaySpeed:1000,
        autoplay:true,
        draggable:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            
                    }
                },

                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                   
                }

            }

            ]
    
      };

    return <>
        <section className="section section-top-p bottom-padding">
            <div className="secondary-shadow">
                .
            </div>
            <Container>
                <h2 className="section-title">CYBER <br />BROTHERHOOD</h2>
                <p className="normal-p">OPEN YOUR DAO</p>
                <div className="mt-5">
                    <p className="normal-p" style={{fontSize:"18px"}}>Be part of the Cyber Brotherhood</p>
                    <a href="https://opensea.io/collection/firstcyberbrotherhood" target="_blank" className="normal-btn-with-icon"><span>Get your avatar</span> <img src={arrow}/></a>
                </div>
                <Slider {...settings}>
                <div className="slider-box">
                    <img src={NFT1}/>
                </div>
                <div className="slider-box">
                    <img src={NFT1}/>
                </div>
                <div className="slider-box">
                    <img src={NFT1}/>
                </div>
                <div className="slider-box">
                    <img src={NFT1}/>
                </div>
                <div className="slider-box">
                    <img src={NFT1}/>
                </div>
                <div className="slider-box">
                    <img src={NFT1}/>
                </div>
              
                
                </Slider>
            </Container>
        </section>
    </>
}

export default memo(SliderSection)