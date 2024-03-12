import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';

export default function TailorMadeExperience() {
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
                                <Col style={{ width: "50vw" }}>
                                    <h1 className="h1-home transition-image roboto" style={{color: 'whitesmoke', zIndex: 10, top: "14vw", marginLeft: "5vw", position: "absolute", lineHeight: "3.75vw" }}>TAILOR MADE EXPERIENCE</h1>
                                </Col>
                                <Fade triggerOnce duration={9000}>
                                    <Image
                                        src="/GlimpseOfSip7.webp"
                                        title="TAILOR MADE EXPERIENCE SIP"
                                        alt="Tailor Made Experience"
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
                            <Layout fullWidth backgroundColor={ThemeColor.blucobalto} style={{ paddingBottom: "5vw" }}>
                                <Header />
                                <div style={{ position: "relative", height: "7vw" }}></div>
                                <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", gap: "10vw" }}>
                                    <Col style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                                        <h1 className="h1-home roboto" style={{ fontSize: "3.55vw", color: "white", lineHeight: "3.75vw" }}>TAILOR MADE EXPERIENCE</h1>
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
                                                <p>On request</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Location</p>
                                                <p>Throughout the wine regions of Portugal</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Duration</p>
                                                <p>By the event</p>
                                            </Col>
                                        </Row>
                                        <Row style={{ display: "flex", flexDirection: "row", width: "100%", gap: "2vw", marginBottom: "8vw" }}>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Including</p>
                                                <p>Contact us for more inquiries</p>
                                            </Col>
                                            <Col style={{ width: "100%", display: "flex", flexDirection: "column", color: "white" }}>
                                                <p style={{ textDecoration: "underline", marginBottom: "1vw" }}>Price</p>
                                                <p>Contact us for more inquiries</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                        <h3 style={{ color: "white", textDecoration: "underline", marginBottom: "2vw" }} className="h3-home roboto">About</h3>
                                        <p style={{ marginBottom: "2vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"At Sip, we're not just about wine tours — we're more than happy to accommodate any request to make your wine and food experience in Portugal truly unforgettable. From private group tastings to tailored food and wine adventures, we're passionate about creating unique itineraries that cater to your specific interests and preferences."}</p>
                                        <p style={{ marginBottom: "2vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Our team is committed to providing exceptional service and ensuring that every detail is taken care of, from start to finish, so you can relax and enjoy your experience. Whether you want to explore the historic streets of Lisbon, discover hidden wine bars, or indulge in a food and wine tasting, we're here to make your wine dreams come true."}</p>
                                        <p style={{ marginBottom: "5vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"So, if you're looking for a personalized wine and food experience in Portugal, look no further than Sip. Contact us today to learn more about our tailor-made adventures and let us create a truly unforgettable experience for you!"}</p>
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