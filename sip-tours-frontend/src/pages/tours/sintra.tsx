import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';

export default function Sintra() {
    const isMobile = useIsMobile();

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.transition-image')!.classList.add('active');
        }, 500)
        setTimeout(() => {
        }, 10000)
    }, [])

    return (
        <>
            {isMobile ? (<></>) :
                (
                    <>
                        <Layout fullWidth fullHeight>
                            <div className="gray-opacity">
                                <Col style={{ width: "40vw" }}>
                                    <h1 className="h1-home transition-image roboto" style={{ zIndex: 10, top: "15vw", marginLeft: "5vw", position: "absolute", lineHeight: "3.75vw" }}>SINTRA</h1>
                                </Col>
                                <Fade triggerOnce duration={9000}>
                                    <Image
                                        src="/GlimpseOfSip7.webp"
                                        alt="Your Image"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </Fade>
                            </div>
                        </Layout>
                            <Layout fullWidth backgroundColor={ThemeColor.violet} style={{ paddingBottom: "5vw" }}>
                                <Header />
                                <div style={{ position: "relative", height: "7vw" }}></div>
                                <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", gap: "10vw" }}>
                                    <Col style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                                        <h1 className="h1-home roboto" style={{ fontSize: "3.55vw", color: "white", lineHeight: "3.75vw" }}>SINTRA TOUR</h1>
                                        <div style={{ marginTop: "1.5vw", marginBottom: "3vw" }}>
                                            <svg fill="white" preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                                <g>
                                                    <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <Row style={{ display: "flex", flexDirection: "row", width: "100%", gap: "2vw", marginBottom: "3vw" }}>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Size</p>
                                                <p>Up to 25 people / Private groups</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Location</p>
                                                <p>Sintra</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Duration</p>
                                                <p>Half day</p>
                                            </Col>
                                        </Row>
                                        <Row style={{ display: "flex", flexDirection: "row", width: "100%", gap: "2vw", marginBottom: "8vw" }}>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Including</p>
                                                <p>High End Wine, Exclusive Food, Professional guide</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Price</p>
                                                <p>Contact us</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                        <h3 style={{ color: "white", textDecoration: "underline", marginBottom: "1.5vw" }} className="h3-home roboto">About</h3>
                                        <p style={{ marginBottom: "1.5vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Nestled amidst lush green hills and dotted with fairytale-like palaces and castles, Sintra is a destination that captivates the imagination. This UNESCO World Heritage Site in Portugal is a treasure trove of history, culture, and natural beauty. As you wander through its narrow cobblestone streets, you'll be transported to a bygone era, where legends come to life and every corner reveals a new enchantment. Explore the majestic Pena Palace, with its vibrant colors and stunning panoramic views, or wander through the mystical Quinta da Regaleira, an estate filled with secret passages and hidden symbols. From the charming town center to the breathtaking landscapes of the Sintra-Cascais Natural Park, Sintra offers a unique and unforgettable experience. Let Sip Tours be your guide as we uncover the secrets of Sintra and create memories that will last a lifetime."}</p>
                                        <p style={{ marginBottom: "5vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Experience the magic of Sintra with Sip Tours! Our half-day journey combines captivating sights with delightful flavors. Optional stops include a visit to a local winery or a cheese farm, and we'll also make a special stop at a local bar for a wine tasting experience. Immerse yourself in the rich history and culture of Sintra as we partner with local businesses for an authentic and immersive experience. Join us on this extraordinary journey and create unforgettable memories with Sip Tours."}</p>
                                    </Col>
                                </Row>
                                <Row style={{ paddingLeft:"3vw", paddingRight:"3vw", overflowX: "auto", display: "flex", width:"340%", flexDirection: "row", marginInline: "auto", height: "40vw", gap: "4vw", scrollbarWidth: "none", /* Firefox */ WebkitOverflowScrolling: "touch" }}>
                                    <Image
                                        src="/Home1.webp"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "65vw" }}
                                    >
                                    </Image>
                                    <Image
                                        src="/Home1.webp"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "65vw" }}
                                    >
                                    </Image>
                                    <Image
                                        src="/Home1.webp"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "65vw" }}
                                    >
                                    </Image>
                                    <Image
                                        src="/Home1.webp"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "65vw" }}
                                    >
                                    </Image>
                                    <Image
                                        src="/Home1.webp"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "65vw" }}
                                    >
                                    </Image>
                                </Row>
                            </Layout>
                        <div style={{ marginTop: "7vw" }}>
                            <PreFooter />
                        </div>
                    </>
                )}
        </>
    );
}