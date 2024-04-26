import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';
import HeaderHome from "@/components/HeaderHome";

export default function GlimpseOfSipMobile() {
    return (
        <>
            <Header />
            <Layout fullWidth fullHeight>
                <div className="gray-opacity">
                    <h1 className="h1-home-mobile roboto" style={{ color: 'whitesmoke', zIndex: 10, top: "10vh", marginLeft: "11vh", position: "absolute" }}>A GLIMPSE OF SIP</h1>
                    <Image
                        src="/GlimpseOfSip7.webp"
                        alt="Glimpse of SIP Portugal Food & Wine Tours"
                        style={{
                            zIndex: -1,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            </Layout>
            <Layout fullWidth backgroundColor={ThemeColor.blucobalto} style={{ paddingTop: "10vh", paddingBottom: "5vh" }}>
                <Col style={{ display: "flex", flexDirection: "column", paddingLeft: "3vh", paddingRight: "3vh" }}>
                    <h1 className="h1-home-mobile roboto" style={{ fontSize: "5.55vh", color: "white", lineHeight: "5.75vh" }}>A GLIMPSE OF SIP</h1>
                    <div style={{ marginTop: "1.5vh", marginBottom: "3vh" }}>
                        <svg fill="white" preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <h3 style={{ color: "white", textDecoration: "underline", marginBottom: "2vh" }} className="h1-home-mobile roboto">About</h3>
                    <p style={{ marginBottom: "2vh", fontWeight: "400" }} className="h3-home-mobile white roboto">{"Are you ready to indulge in a truly unforgettable experience in Lisbon? Look no further than our Glimpse of Sip Tour! From the romantic and bohemian neighborhoods of Príncipe Real to the stunning Avenida de Liberdade, we'll take you on a journey through Portugal's most unique wine bars and exquisite eateries. With a focus on insight and history, you'll have the opportunity to taste a variety of wines, including Vinho Verde, white from the Açores Islands, and red from Bairrada, all perfectly paired with traditional Portuguese petiscos (tapas)."}</p>
                    <p style={{ marginBottom: "10vh", fontWeight: "400" }} className="h3-home-mobile white roboto">{"The culinary journey doesn't stop there. We will visit the luxurious Palácio da Anunciada, a stunning 5-star hotel built in 1533, where you'll be transported to an exclusive area of the city where you can savor typical Portuguese food such as octopus and squid croquettes, local cheeses, and artisanal sausages, all topped off with famous aged Portuguese Tawny Port. Don't miss out on this magical tasting experience that combines romance, history, and unforgettable flavors in a unique atmosphere."}</p>
                    <div style={{ paddingBottom: "10vh" }}>
                        <Col style={{ marginBottom: "3vh", width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                            <p style={{ textDecoration: "underline", marginBottom: "1vh" }}>Size</p>
                            <p style={{ fontSize: "2.25vh" }}>Up to 20 people / Private groups</p>
                        </Col>
                        <Col style={{ marginBottom: "3vh", width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Location</p>
                            <p style={{ fontSize: "2.25vh" }}>Príncipe Real, <br /> Avenida de Liberdade — Lisbon</p>
                        </Col>
                        <Col style={{ marginBottom: "3vh", width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Duration</p>
                            <p style={{ fontSize: "2.25vh" }}>3 hours</p>
                        </Col>
                        <Col style={{ marginBottom: "3vh", width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Including</p>
                            <p style={{ fontSize: "2.25vh" }}>High End Wine, Exclusive Food, <br /> Professional guide</p>
                        </Col>
                        <Col style={{ marginBottom: "3vh", width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Price</p>
                            <p style={{ fontSize: "2.25vh" }}>Contact us</p>
                        </Col>
                    </div>
                    <Row style={{ paddingLeft: "3vw", paddingRight: "3vw", overflowX: "auto", display: "flex", width: "600%", flexDirection: "row", marginInline: "auto", height: "20vh", gap: "3vh", scrollbarWidth: "none", /* Firefox */ WebkitOverflowScrolling: "touch" }}>
                        <Image
                            src="/Home1.webp"
                            alt="Sip Tour Home Page"
                            style={{ width: "80vw" }}
                        >
                        </Image>
                        <Image
                            src="/Home1.webp"
                            alt="Sip Tour Home Page"
                            style={{ width: "100vw" }}
                        >
                        </Image>
                        <Image
                            src="/Home1.webp"
                            alt="Sip Tour Home Page"
                            style={{ width: "100vw" }}
                        >
                        </Image>
                        <Image
                            src="/Home1.webp"
                            alt="Sip Tour Home Page"
                            style={{ width: "100vw" }}
                        >
                        </Image>
                        <Image
                            src="/Home1.webp"
                            alt="Sip Tour Home Page"
                            style={{ width: "100vw" }}
                        >
                        </Image>
                    </Row>
                </Col>
            </Layout >
            <div style={{ paddingTop: "10vh" }}>
                <PreFooter />
            </div>
        </>
    );
}