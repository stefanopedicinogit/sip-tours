import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function Services() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <>
                    <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                        <Header />
                        <Image
                            src="/ServicesMobile1.webp"
                            alt="Sip Tours About Page"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <Row style={{ marginTop: "5vh", width: "92vw", marginInline: "auto", marginBottom: "20vh" }}>
                            <h1 className="h1-home-mobile">OUR SERVICES</h1>
                            <div style={{ marginTop: "3vh" }}>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="p-home-mobile" style={{ fontSize: "1.95vh", marginTop: "8vh", marginBottom: "8vh" }}>{"At Sip Tours, we aim to provide more than just food and wine tours. We offer a range of tasting experiences and tailor-made adventures designed to suit your specific interests and preferences. Whether you're keen on exploring Lisbon's historic streets, discovering hidden small cities around Portugal, or indulging in a private group tasting, we're here to craft a unique and unforgettable experience just for you. Our team is passionate about delivering exceptional service and ensuring that every detail is meticulously taken care of, from start to finish. So, if you're seeking a personalized experience in Portugal, look no further than us. We're here to turn your food and wine dreams into reality!"}</p>
                        </Row>
                        <Row>
                            <Image
                                src="/Wine1.jpeg"
                                alt="Sip Tours About Page"
                                style={{ width: "95vw", marginInline: "auto", height: "70vh" }}
                            />
                            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom: "3vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                                <p style={{ marginTop: "2.5vh", fontSize: "2.5vh" }} className="p-home-mobile">Private Wein Tasting</p>
                            </Row>
                        </Row>
                        <Row>
                            <Image
                                src="/Services3.jpg"
                                alt="Sip Tours About Page"
                                style={{ width: "95vw", marginInline: "auto", height: "70vh" }}
                            />
                            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom: "15vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                                <p style={{ marginTop: "2.5vh", fontSize: "2.5vh" }} className="p-home-mobile">Tailor Made Experience</p>
                            </Row>
                        </Row>
                        <Row>
                            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "column", marginBottom: "15vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                                <h1 className="h3-home-mobile" style={{ marginBottom: "3vh" }}>WANT TO KNOW MORE?</h1>
                                <Button
                                    onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                                    className="button-rounded-black-mobile clickable">
                                    Talk With Us
                                </Button>
                            </Row>
                        </Row>
                        <PreFooter />

                    </Layout>
                </>
            ) :
                (
                    <>

                        <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                            <Header />
                            <Image
                                src="/Services1.webp"
                                alt="Sip Tours Services Page"
                                style={{ width: "100%", height: "auto" }}
                            >
                            </Image>
                            <Row style={{ width: "92vw", marginInline: "auto", marginTop: "3vw" }}>
                                <h1 className="h1-home">OUR SERVICES</h1>
                                <div style={{ marginTop: "2vw" }}>
                                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                        <g>
                                            <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </Row>
                            <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "2vw" }}>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}></Col>
                                <Col style={{ width: "70%", display: "flex", flexDirection: "column" }}>
                                    <p className="p-home">{"At Sip Tours, we aim to provide more than just food and wine tours. We offer a range of tasting experiences and tailor-made adventures designed to suit your specific interests and preferences. Whether you're keen on exploring Lisbon's historic streets, discovering hidden small cities around Portugal, or indulging in a private group tasting, we're here to craft a unique and unforgettable experience just for you. Our team is passionate about delivering exceptional service and ensuring that every detail is meticulously taken care of, from start to finish. So, if you're seeking a personalized experience in Portugal, look no further than us. We're here to turn your food and wine dreams into reality!"}</p>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "4vw", marginBottom: "5vw", display: "flex", flexDirection: "row", width: "92vw", marginInline: "auto", gap: "5vw" }}>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                    <Image
                                        onClick={() => navigate("/tours/winetasting")}
                                        className="clickable"
                                        src="/Wine1.jpeg"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "100%", height: "100vh", marginBottom: "1vw" }}
                                    />
                                    <p
                                        className="clickable"
                                        onClick={() => navigate("/tours/winetasting")}
                                    >
                                        Private Wine Tasting
                                    </p>
                                </Col>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                    <Image
                                        onClick={() => navigate("/tours/customizabletours")}
                                        className="clickable"
                                        src="/Services3.jpg"
                                        alt="Sip Tours Home Page"
                                        style={{ width: "100%", height: "100vh", marginBottom: "1vw" }}
                                    />
                                    <p
                                        className="clickable"
                                        onClick={() => navigate("/tours/customizabletours")}
                                    >
                                        Tailor Made Experience
                                    </p>
                                </Col>
                            </Row>
                            <Row style={{ display: "flex", flexDirection: "row", width: "92vw", marginBottom: "8vw" }}>
                                <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                                    <Button
                                        style={{ marginLeft: "8.5vw" }}
                                        onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                                        className="button-rounded-black clickable">
                                        Talk With Us
                                    </Button>
                                </div>
                            </Row>
                            <PreFooter />
                        </Layout>
                    </>
                )
            }
        </>
    );
}