import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Col, Image, Row } from "react-bootstrap";

export default function About() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (<></>) :
                (
                    <>
                        <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                            <Header />
                            <Image
                                src="/About1.webp"
                                alt="Sip Tours About Page"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <Row style={{ width: "92vw", marginInline: "auto", marginTop: "3vw" }}>
                                <h1 className="h1-home">SIP TOURS</h1>
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
                                    <p className="p-home">Sip Tours is a project that was born from a shared passion for wine, food, and hospitality. The founders of Sip, Enrico and Dana, recognized that there was a need for a unique and personalized approach to wine tourism that would allow visitors to fully immerse themselves in the local culture, cuisine, and wine scene.</p>
                                </Col>
                            </Row>
                            <Row style={{ backgroundColor: ThemeColor.pinkHome, width: "100%", marginTop: "8vw" }}>
                                <Row style={{ width: "92vw", marginInline: "auto" }}>
                                    <Row style={{ width: "100%", height: "4vw" }}>
                                    </Row>
                                    <h1 className="h1-home white">APPROACH</h1>
                                    <div style={{ marginTop: "2vw" }}>
                                        <svg fill="white" preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                            <g>
                                                <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </Row>
                                <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "2vw" }}>
                                    <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}></Col>
                                    <Col style={{ width: "70%", display: "flex", flexDirection: "column", gap: "2vw" }}>
                                        <p className="p-home white">The mission of Sip is to create unforgettable wine experiences for our clients, with a focus on quality, authenticity, and sustainability. By partnering with local wineries, restaurants, and accommodations, we are able to provide a truly immersive experience that showcases the best that each region has to offer.</p>
                                        <p className="p-home white">At the heart of Sip is a deep appreciation for the art and science of winemaking. Our team is passionate about sharing their knowledge and expertise with clients, and guiding them on a journey of discovery that explores the different varietals, styles, and traditions of winemaking.</p>
                                        <p className="p-home white">Sip is also committed to promoting sustainable and responsible tourism practices, and works closely with local communities and businesses to ensure that our impact on the environment and the local economy is positive and meaningful.</p>
                                        <p style={{ marginBottom: "2vw" }} className="p-home white">In short, Sip is more than just a wine tour company — it is a movement that celebrates the beauty, richness, and diversity of wine culture around the world, and seeks to share that passion with others in a way that is authentic, immersive, and sustainable.</p>
                                    </Col>
                                </Row>
                            </Row>
                            <Row style={{ width: "92vw", marginInline: "auto", marginTop: "3vw" }}>
                                <h1 className="h1-home">THIS IS US</h1>
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
                                    <p className="p-home">Sip Tours is a project that was born from a shared passion for wine, food, and hospitality. The founders of Sip, Enrico and Dana, recognized that there was a need for a unique and personalized approach to wine tourism that would allow visitors to fully immerse themselves in the local culture, cuisine, and wine scene.</p>
                                </Col>
                            </Row>

                        </Layout>
                    </>
                )
            }
        </>
    );
}
