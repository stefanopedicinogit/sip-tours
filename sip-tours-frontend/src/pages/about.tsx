import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function About() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <>
                    <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                        <Header />
                        <Image
                            src="/AboutMobile1.webp"
                            alt="Sip Tour About Page"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <Row style={{ marginTop: "5vh", width: "92vw", marginInline: "auto", marginBottom: "8vh" }}>
                            <h1 className="h1-home-mobile">SIP TOUR</h1>
                            <div style={{ marginTop: "3vh" }}>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="p-home-mobile" style={{ marginTop: "8vh", marginBottom: "8vh", textAlign: "justify" }}>Sip Tour is a project that was born from a shared passion for wine, food, and hospitality. The founder of Sip, Enrico, recognized that there was a need for a unique and personalized approach to wine tourism that would allow visitors to fully immerse themselves in the local culture, cuisine, and wine scene.</p>
                        </Row>
                        <Row style={{ backgroundColor: ThemeColor.pinkHome, width: "100%", marginTop: "8vh" }}>
                            <Row style={{ width: "92vw", marginInline: "auto" }}>
                                <Row style={{ width: "100%", height: "6vh" }}>
                                </Row>
                                <h1 className="h1-home-mobile white">APPROACH</h1>
                                <div style={{ marginTop: "3vh" }}>
                                    <svg fill="white" preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                                        <g>
                                            <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                                        </g>
                                    </svg>
                                </div>
                            </Row>
                            <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "10vh" }}>
                                <Col style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
                                    <p className="p-home-mobile white" style={{ textAlign: "justify" }}>The mission of Sip is to create unforgettable wine experiences for our clients, with a focus on quality, authenticity, and sustainability. By partnering with local wineries, restaurants, and accommodations, we are able to provide a truly immersive experience that showcases the best that each region has to offer.</p>
                                    <p className="p-home-mobile white" style={{ textAlign: "justify" }}>At the heart of Sip is a deep appreciation for the art and science of winemaking. Our team is passionate about sharing their knowledge and expertise with clients, and guiding them on a journey of discovery that explores the different varietals, styles, and traditions of winemaking.</p>
                                    <p className="p-home-mobile white" style={{ textAlign: "justify" }}>Sip is also committed to promoting sustainable and responsible tourism practices, and works closely with local communities and businesses to ensure that our impact on the environment and the local economy is positive and meaningful.</p>
                                    <p style={{ marginBottom: "8vh",  textAlign: "justify" }} className="p-home-mobile white">In short, Sip is more than just a wine tour company — it is a movement that celebrates the beauty, richness, and diversity of wine culture around the world, and seeks to share that passion with others in a way that is authentic, immersive, and sustainable.</p>
                                </Col>
                            </Row>
                        </Row>
                        <Row style={{ width: "92vw", marginInline: "auto" }}>
                            <Image
                                src="/AboutMobile2.webp"
                                alt="Sip Tour About Page"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <p className="p-home-mobile" style={{ marginTop: "5vh", marginBottom: "8vh" }}>Enrico Pignone - Professional Winemaker Founder and Tour Guide</p>
                            <p className="p-home-mobile" style={{ marginBottom: "15vh", textAlign: "justify" }}>{"After earning my double degree in Viticulture and Enology from the universities of Asti (DISAFA) and Lisbon (ISA), I fell in love with Portugal! My professional journey has taken me through various roles, from assisting winemakers to driving sales and product development for the B2B food and beverage market. Alongside establishing the Rico Pignonè wines and olive oil brand from the Douro Superior, I founded Sip food and wine tours to offer exclusive experiences, sharing my profound passion for this country and immersing everyone in the essence of Portuguese culture, from its art to its cuisine, wines, and vibrant local communities. I firmly believe that exploring Portugal's food and wine culture is the most authentic and captivating way to connect with its sense of place. Beyond business pursuits, I revel in reading books, listening to music, strumming the guitar, traveling, staying active, and cherishing moments that linger in memory."}</p>
                        </Row>
                        <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom: "15vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
                            <Button
                                className="button-rounded-black-mobile clickable"
                                onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                                >
                                Talk With Us
                            </Button>
                        </Row>
                        <PreFooter />
                    </Layout>

                </>
            )
                :
                (
                    <>
                        <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                            <Header />
                            <Image
                                src="/About1.webp"
                                alt="Sip Tour About Page"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <Row style={{ width: "92vw", marginInline: "auto", marginTop: "3vw" }}>
                                <h1 className="h1-home">SIP TOUR</h1>
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
                                    <p className="p-home" style={{ textAlign: "justify" }}>Sip Tour is a project that was born from a shared passion for wine, food, and hospitality. The founder of Sip, Enrico, recognized that there was a need for a unique and personalized approach to wine tourism that would allow visitors to fully immerse themselves in the local culture, cuisine, and wine scene.</p>
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
                                        <p className="p-home white" style={{ textAlign: "justify" }}>The mission of Sip is to create unforgettable wine experiences for our clients, with a focus on quality, authenticity, and sustainability. By partnering with local wineries, restaurants, and accommodations, we are able to provide a truly immersive experience that showcases the best that each region has to offer.</p>
                                        <p className="p-home white" style={{ textAlign: "justify" }}>At the heart of Sip is a deep appreciation for the art and science of winemaking. Our team is passionate about sharing their knowledge and expertise with clients, and guiding them on a journey of discovery that explores the different varietals, styles, and traditions of winemaking.</p>
                                        <p className="p-home white" style={{ textAlign: "justify" }}>Sip is also committed to promoting sustainable and responsible tourism practices, and works closely with local communities and businesses to ensure that our impact on the environment and the local economy is positive and meaningful.</p>
                                        <p style={{ marginBottom: "2vw", textAlign: "justify" }} className="p-home white">In short, Sip is more than just a wine tour company — it is a movement that celebrates the beauty, richness, and diversity of wine culture around the world, and seeks to share that passion with others in a way that is authentic, immersive, and sustainable.</p>
                                    </Col>
                                </Row>
                            </Row>
                            <Row style={{ width: "92vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "2vw", marginBottom: "8vw" }}>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}></Col>
                                <Col style={{ width: "100%", display: "flex", flexDirection: "column" }}></Col> 
                                <Col style={{ width: "80%", display: "flex", flexDirection: "column" }}>
                                    <Row style={{ width: "100%", height: "25vw", display: "flex", flexDirection: "row", gap: "3vw", marginBottom: "3vw" }}>
                                        <Col style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                                            <Image
                                                src="/Team1.webp"
                                                alt="Sip Tour About Page"
                                                style={{ width: "100%", height: "100%" }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row style={{ width: "100%", display: "flex", flexDirection: "row", gap: "3vw", marginBottom: "3vw" }}>
                                        <Col style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", gap: "2vw" }}>
                                            <p className="p-home">Enrico Pignone - Founder, Winemaker and Tour Guide</p>
                                            <p className="p-home" style={{ textAlign: "justify" }}>{"After earning my double degree in Viticulture and Enology from the universities of Asti (DISAFA) and Lisbon (ISA), I fell in love with Portugal!" } <br/> <br/>{"My professional journey has taken me through various roles, from assisting winemakers to driving sales and product development for the B2B food and beverage market."} <br/> <br/> {"Alongside establishing the Rico Pignonè wines and olive oil brand from the Douro Superior, I founded Sip food and wine tours to offer exclusive experiences, sharing my profound passion for this country and immersing everyone in the essence of Portuguese culture, from its art to its cuisine, wines, and vibrant local communities."} <br/> <br/> {"I firmly believe that exploring Portugal's food and wine culture is the most authentic and captivating way to connect with its sense of place."} <br/> <br/> {"Beyond business pursuits, I revel in reading books, listening to music, strumming the guitar, traveling, staying active, and cherishing moments that linger in memory."}</p>
                                        </Col>
                                    </Row>
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
