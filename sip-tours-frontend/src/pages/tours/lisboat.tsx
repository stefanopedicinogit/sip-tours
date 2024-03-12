import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';

export default function Lisboat() {
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
                                    <h1 className="h1-home transition-image roboto" style={{ zIndex: 10, top: "15vw", marginLeft: "5vw", position: "absolute", lineHeight: "3.75vw" }}>LISBOAT & SIP</h1>
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
                                        <h1 className="h1-home roboto" style={{ fontSize: "3.55vw", color: "white", lineHeight: "3.75vw" }}>LISBOAT & SIP</h1>
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
                                                <p>Limited to 15 people / Private groups</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Location</p>
                                                <p>Cais da Princesa (Belém Tower), Lisboat Torre Belém</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Duration</p>
                                                <p>3 hours</p>
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
                                        <p style={{ marginBottom: "1.5vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">Sailing the Tejo river, tasting delicious wines and food with a wonderful view, while enjoying culture and conviviality! Join us for a hop-on-hop-off boat special cruise from Belém to Praça do Comércio, savor a welcome drink as you cruise along the Tejo river for 45 minutes!</p>
                                        <p style={{ marginBottom: "5vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Get ready to disembark at the most beautiful square in Lisbon and immerse yourself in one of the city's most historical cafés and restaurants, 'Martinho da Arcada', to relish exquisite authentic Portuguese food and wines! Taking a nice walk in the heart of the city, we will visit one of the first bars to sell ginjinha in Lisbon, opened in 1840 by a Galician monk, to experience the best ginjinha in town!"}</p>
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