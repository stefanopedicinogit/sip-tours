import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Col, Image, Row } from "react-bootstrap";

export default function GlipseOfSip() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (<></>) :
                (
                    <>
                        <Layout fullWidth backgroundColor={ThemeColor.pinkHome}>
                            <Header />
                            <div style={{ position: "relative", height: "13vw" }}></div>
                            <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", gap: "10vw"}}>
                                <Col style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                                    <h1 className="h1-home" style={{ color: "white", lineHeight: "3.75vw" }}>GLIMPSE OF SIP LUXURY TOUR</h1>
                                    <div style={{ marginTop: "1.5vw", marginBottom: "5vw" }}>
                                        <svg fill="white" preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                            <g>
                                                <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <Row style={{ display: "flex", flexDirection: "row", width: "100%", gap: "2vw", marginBottom: "7vw" }}>
                                        <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Size</p>
                                            <p>Up to 20 people / Private groups</p>
                                        </Col>
                                        <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Location</p>
                                            <p>Príncipe Real, <br /> Avenida de Liberdade — Lisbon</p>
                                        </Col>
                                        <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                            <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Duration</p>
                                            <p>3 hours</p>
                                        </Col>
                                    </Row>
                                    <Row style={{ display: "flex", flexDirection: "row", width: "100%", gap: "2vw", marginBottom: "15vw" }}>
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
                                    <h3 style={{ color: "white", textDecoration: "underline", marginBottom: "3vw" }} className="h3-home">About</h3>
                                    <p style={{ marginBottom: "2vw" }} className="white">Are you ready to indulge in a truly unforgettable experience in Lisbon? Look no further than our Glimpse of Sip Tour! From the romantic and bohemian neighborhoods of Príncipe Real to the stunning Avenida de Liberdade, we'll take you on a journey through Portugal's most unique wine bars and exquisite eateries. With a focus on insight and history, you'll have the opportunity to taste a variety of wines, including Vinho Verde, white from the Açores Islands, and red from Bairrada, all perfectly paired with traditional Portuguese petiscos (tapas). </p>
                                    <p style={{ marginBottom: "5vw" }} className="white">The culinary journey doesn't stop there. We will visit the luxurious Palácio da Anunciada, a stunning 5-star hotel built in 1533, where you'll be transported to an exclusive area of the city where you can savor typical Portuguese food such as octopus and squid croquettes, local cheeses, and artisanal sausages, all topped off with famous aged Portuguese Tawny Port. Don't miss out on this magical tasting experience that combines romance, history, and unforgettable flavors in a unique atmosphere.</p>
                                </Col>
                            </Row>
                        </Layout>
                        <div style={{ marginTop: "7vw" }}>
                            <PreFooter />
                        </div>
                    </>
                )
            }
        </>
    );
}