import FormContact from "@/components/FormContact";
import FormContactMobile from "@/components/FormContactMobile";
import HeaderHome from "@/components/HeaderHome";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function Contact() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <>
                    <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                        <HeaderHome />
                        <div style={{ position: "relative", marginBottom: "7vw" }}>
                            <Image
                                src="/Contact1.webp"
                                alt="Sip Tours About Page"
                                style={{ width: "100%", height: "25vh" }}
                            />
                            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                <h2 style={{ textAlign: "center", color: ThemeColor.white, fontSize: "2.45vh", fontWeight: "bold" }}>GET IN TOUCH WITH US</h2>
                            </div>
                        </div>
                        <Row style={{ marginTop: "5vh", width: "92vw", marginInline: "auto", marginBottom: "8vh" }}>
                            <h1 className="h1-home-mobile">CONTACT</h1>
                            <div style={{ marginTop: "3vh" }}>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="p-home-mobile" style={{ marginTop: "8vh", marginBottom: "8vh" }}>
                                {"At Sip we believe that building relationships with our clients is key to providing exceptional service. We love meeting new people and are always here to answer your questions, whether you're looking for more information about our tours or simply want some advice on where to eat and drink in Lisbon."}
                            </p>
                            <p className="p-home-mobile" style={{ marginTop: "8vh", marginBottom: "8vh" }}>
                                {"We pride ourselves on our personalized approach, and we're here to help with almost anything you need. So don't hesitate to get in touch — we're excited to connect with you and share our love for Portugal's wine and food culture!"}</p>
                            <p className="p-home-mobile" style={{ marginTop: "8vh", marginBottom: "4vh" }}>
                                Fill the form and we will get back to you as soon as possible. Or you can click on the WhatsApp button below to call us or send a message whenever you want!
                            </p>
                        </Row>
                        <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom: "10vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                            <Button
                                className="button-rounded-black-mobile clickable"
                                onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                            >
                                WhatsApp
                            </Button>
                        </Row>
                        <FormContactMobile />
                        <div style={{ marginTop: "5vh" }}>
                            <PreFooter />
                        </div>
                    </Layout>
                </>
            ) :
                (
                    <>
                        <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                            <HeaderHome />
                            <div style={{ position: "relative", marginBottom: "7vw" }}>
                                <Image
                                    src="/Contact1.webp"
                                    alt="Sip Tours About Page"
                                    style={{ width: "100%", height: "auto", marginTop: "6vw" }}
                                />
                                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                    <h2 style={{ textAlign: "center", color: ThemeColor.white, fontSize: "4vw", fontWeight: "bold" }}>GET IN TOUCH WITH US</h2>
                                </div>
                            </div>
                            <Row style={{ width: "80vw", marginInline: "auto", display: "flex", flexDirection: "row", gap: "20vw", marginBottom: "15vw" }}>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                    <p className="p-home" style={{ fontSize: "1.4vw", marginBottom: "8vw" }}>Fill the form on the right and we will get back to you as soon as possible. Or you can click on the WhatsApp button below to call us or send a message whenever you want!</p>
                                    <div style={{ marginBottom: "2vw" }}>
                                        <svg style={{ transform: "rotate(90deg)" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                            <g>
                                                <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                                        <Button
                                            className="button-rounded-black clickable"
                                            style={{ width: "15vw" }}
                                            onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                                        >WhatsApp</Button>
                                    </div>
                                </Col>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                    <p className="p-home" style={{ fontSize: "1.4vw", marginBottom: "3vw" }}>Fill In Your Info</p>
                                    <FormContact />
                                </Col>
                            </Row>
                            <PreFooter />
                        </Layout>
                    </>
                )
            }
        </>
    );
}