import Header from "@/components/Header";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Fade } from 'react-awesome-reveal';

export default function WineTasting() {
    const isMobile = useIsMobile();


    const [galleryWidth, setGalleryWidth] = useState<number>(170);
    const [imagePaths, setImagePaths] = useState<string[]>([]);

    const onLoad = async () => {
        setTimeout(() => {
            document.querySelector('.transition-image')!.classList.add('active');
        }, 500)
        setTimeout(() => {
        }, 10000)
        const imagePaths = Array.from({ length: 4 }, (_, i) => `/WineTastingGallery/${i}.jpg`);
        console.log(imagePaths)
        setGalleryWidth((imagePaths.length * 30) + 50);
        setImagePaths(imagePaths);
    }

    useEffect(() => {
        onLoad()
    }, []);


    return (
        <>
            {isMobile ? (<></>) :
                (
                    <>
                        <Layout fullWidth fullHeight>
                            <div className="gray-opacity">
                                <Col style={{ width: "50vw" }}>
                                    <h1 className="h1-home transition-image roboto" style={{ color: 'whitesmoke', zIndex: 10, top: "14vw", marginLeft: "5vw", position: "absolute", lineHeight: "3.75vw" }}>FOOD & WINE TASTING</h1>
                                </Col>
                                <Fade triggerOnce duration={9000}>
                                    <Image
                                        src="/PrivateWine1.jpg"
                                        title="Food & Wine Tasting SIP Tour"
                                        alt="Food & Wine Tasting SIP Tour"
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
                                    <h1 className="h1-home roboto" style={{ fontSize: "3.55vw", color: "white", lineHeight: "3.75vw" }}>FOOD & WINE TASTING</h1>
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
                                            <p>Up to 50 people / Private groups</p>
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
                                    <p style={{ marginBottom: "2vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Are you searching for a unique and memorable food and wine tasting experience for your group or special occasion? Look no further than us!! Our tours and tastings will take you on a journey through Portugal's most famous wine regions — from the historic vineyards of the Douro Valley to the stunning coastal vineyards of Alentejo"}</p>
                                    <p style={{ marginBottom: "2vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Whether you're celebrating a special occasion, hosting a corporate event, or just looking for a fun day out with friends, our team can create a bespoke experience that caters to your specific interests and preferences. With our expert guides and personalized service, we're committed to making your wine tasting journey through Portugal an unforgettable one. So why not join us for a journey through Portugal's diverse wine regions and indulge in the best food and wines that this beautiful country has to offer?"}</p>
                                    <p style={{ marginBottom: "5vw", fontWeight: "400", fontSize: "1.25vw" }} className="white roboto">{"Contact us today to learn more about our wine tours and tastings and book your bespoke experience."}</p>
                                </Col>
                            </Row>
                            <Row style={{ paddingLeft: "3vw", paddingRight: "1vw", overflowX: "auto", display: "flex", width: `${galleryWidth}vw`, flexDirection: "row", marginInline: "auto", height: "40vw", gap: "4vw", scrollbarWidth: "none", /* Firefox */ WebkitOverflowScrolling: "touch" }}>
                                {imagePaths.map((path, index) => (
                                    <Image key={index} src={path} alt="Sip tour Bacchus Lisboa Gallery" style={{ width: "80%", height: "auto" }} />
                                ))}
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