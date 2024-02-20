import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function Services() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (<></>) :
                (
                    <>

                        <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                            <Header/>
                            <Image
                                src="/Services1.webp"
                                alt="Sip Tours Home Page"
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
                                <p className="p-home">At Sip Tours, we strive to provide much more than just wine tours. We offer a range of tasting experiences and tailor-made adventures that are designed to suit your specific interests and preferences. Whether you're interested in exploring the historic streets of Lisbon, discovering hidden wine bars, or indulging in a private group tasting, we're here to create a unique and unforgettable experience just for you. Our team is passionate about providing exceptional service and ensuring that every detail is taken care of — from start to finish. So, if you're looking for a personalized wine experience in Lisbon, look no further than us. We're here to make your wine dreams come true!</p>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "4vw", marginBottom: "4vw", display: "flex", flexDirection: "row", width: "92vw", marginInline: "auto" }}>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Layout>
                    </>
                )
            }
        </>
    );
}