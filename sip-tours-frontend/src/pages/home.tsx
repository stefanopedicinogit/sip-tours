import HeaderHome from "@/components/HeaderHome";
import Layout from "@/components/Layout";
import PreFooter from "@/components/PreFooter";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function Home() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <>
          <HeaderHome />
          <Layout fullWidth backgroundColor={ThemeColor.whiteHome}
          // backgroundStyle={{ paddingTop: "10vw" }}
          >
            <Image
              src="/HomeMobile1.webp"
              alt="Sip Tours Home Page"
              style={{ width: "100%", height: "auto" }}
            >
            </Image>
            <Row style={{ width: "92vw", marginInline: "auto", marginTop: "3vh" }}>
              <h1 className="h1-home-mobile">PORTUGUESE FOOD & WINE EXPERIENCES</h1>
              <h3 className="h3-home-mobile" style={{ marginTop: "2vh" }}>Explore the flavours of Portugal and experience our unique culture and history. </h3>
            </Row>
            <Row style={{ display: "flex", flexDirection: "row", width: "90vw", marginInline: "auto", marginTop: "2vh", marginBottom: "15vh" }}>
              <Button
                onClick={() => navigate("/contact")}
                className="button-rounded-black-mobile clickable">
                Book Now
              </Button>
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <h1 className="h1-home-mobile">WHAT IS SIP?</h1>
              <h3 className="p-home-mobile" style={{ marginTop: "2vh" }}>{"Sip was born with the intention of sharing our knowledge and passion for Portugal's food and wine heritage with others. Our team of dedicated professionals is committed to providing a welcoming and engaging environment for wine and food enthusiasts of all levels. With a focus on education, conviviality, entertainment, and professional expertise, we are proud to offer the very best experience to discover and explore the wonderful world of Portugal."}</h3>
            </Row>
            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom: "18vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
              <Button
                className="button-rounded-black-mobile clickable"
                onClick={() => navigate("/about")}>
                About Us
              </Button>
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <h3 className="h3-home-mobile" style={{ textDecoration: "underline" }}>Our Wine and Food Exclusive Tours & Experiences</h3>
              <h3 className="p-home-mobile" style={{ marginTop: "2vh" }}>{"Discover the authentic flavors of Portugal on our Food & Wine Tours in Lisbon's oldest neighborhood. Indulge in a variety of local wines, including red, white, palhete, and fortified varietals, along with the famous ''ginjinha'' liqueur. We'll also take you to some of the most historic landmarks and traditional restaurants, where you'll have the chance to experience the local culture and cuisine firsthand. With our expert guides, you are guaranteed an unforgettable gastronomic journey!"}</h3>
            </Row>
            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom: "18vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
              <Button
                className="button-rounded-black-mobile clickable"
                onClick={() => navigate("/services")}>
                Our Services
              </Button>
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <Image
                src="/Home2.jpg"
                alt="Sip Tours Home Page"
                style={{ width: "100%", height: "auto" }}
              />
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <h1 className="h1-home-mobile" style={{ textDecoration: "underline" }}>BACCHUS LISBOA</h1>
            </Row>
            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "3vh", marginBottom: "8vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
              <Button
                onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                className="button-rounded-black-mobile clickable">
                Book Now
              </Button>
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <Image
                src="/HomeMobile3.webp"
                alt="Sip Tours Home Page"
                style={{ width: "100%", height: "auto" }}
              />
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <h1 className="h1-home-mobile" style={{ textDecoration: "underline" }}>A GLIMPSE OF SIP</h1>
            </Row>
            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "3vh", marginBottom: "8vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
              {/* <Button
                onClick={() => navigate("/tour/glimpseofsip")}
                className="button-rounded-black-mobile clickable">
                View More
              </Button> */}
              <Button
                onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                className="button-rounded-black-mobile clickable">
                Book Now
              </Button>
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <Image
                src="/HomeLisboat.jpg"
                alt="Sip Tours Home Page"
                style={{ width: "100%", height: "auto" }}
              />
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <h1 className="h1-home-mobile" style={{ textDecoration: "underline" }}>LISBOAT & SIP</h1>
            </Row>
            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "3vh", marginBottom: "8vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
              <Button
                onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                className="button-rounded-black-mobile clickable">
                Book Now
              </Button>
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <Image
                src="/Home4.jpg"
                alt="Sip Tours Home Page"
                style={{ width: "100%", height: "auto" }}
              />
            </Row>
            <Row style={{ width: "92vw", marginInline: "auto", marginBottom: "3vh" }}>
              <h1 className="h1-home-mobile" style={{ textDecoration: "underline" }}>MEMORABLE SINTRA</h1>
            </Row>
            <Row style={{ width: "100vw", marginInline: "auto", display: "flex", flexDirection: "row", marginTop: "3vh", marginBottom: "8vh", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
              <Button
                onClick={() => navigate("https://api.whatsapp.com/send?phone=351912247175&text=%28Enrico+Sip+Tours%29+Hello%21+I+would+like+to+schedule+a+tour")}
                className="button-rounded-black-mobile clickable">
                Book Now
              </Button>
            </Row>
            <PreFooter />
          </Layout>
        </>
      )
        :
        (
          <>
            <HeaderHome />
            <Layout fullWidth backgroundColor={ThemeColor.whiteHome} backgroundStyle={{ paddingTop: "10vw" }}>
              <Row style={{ width: "92vw", marginInline: "auto" }}>
                <h1 className="h1-home">PORTUGUESE FOOD & WINE EXPERIENCES</h1>
                <h3 className="h3-home">Explore the flavours of Portugal and experience our unique culture and history. </h3>
                <div style={{ marginTop: "2vw", marginBottom: "3.5vw" }}>
                  <Button
                    onClick={() => navigate("/contact")}
                    className="button-rounded-black clickable">
                    Book Now
                  </Button>
                </div>
              </Row>
              <Image
                src="/Home1.webp"
                alt="Sip Tours Home Page"
                style={{ width: "100%", height: "auto" }}
              >
              </Image>
              <Row style={{ display: "flex", flexDirection: "row", width: "90vw", marginInline: "auto" }}>
                <Col style={{ width: "60%" }}>
                  <h2 className="h2-home" style={{ marginTop: "5vw", marginBottom: "3.5vw" }}>WHAT IS SIP?</h2>
                  <p className="p-home" style={{ textAlign: "justify" }}> Sip was born with the intention of sharing our knowledge and passion for the food and wine heritage of Portugal with others. Our team of dedicated professionals is committed to providing a welcoming and engaging environment for wine and food enthusiasts of all levels. With a focus on education, conviviality, entertainment, and professional expertise, we are proud to offer the very best experience to discover and explore the wonderful world of Portugal. </p>
                </Col>
                <Col style={{ width: "40%" }}>
                  <div style={{ marginTop: "15vw", marginBottom: "3.5vw", marginLeft: "15vw" }}>
                    <Button
                      onClick={() => navigate("/about")}
                      className="button-rounded-black clickable">
                      About Us
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row style={{ width: "92.5vw", marginTop: "1vw", marginInline: "auto", marginBottom: "6vw" }}>
                <Button
                  onClick={() => navigate("/about")}
                  className="underlined clickable p-home">
                  View More
                </Button>
                <div style={{ marginTop: "2vw" }}>
                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                </div>
              </Row>
              <Row style={{ display: "flex", flexDirection: "row", width: "90vw", marginInline: "auto" }}>
                <Col style={{ width: "50%" }}>
                  <h3 style={{ fontSize: "1.55vw" }} className="h3-home underlined">
                    Our Wine and Food Exclusive Tours & Experiences
                  </h3>
                  <Button
                    onClick={() => navigate("/services")}
                    style={{ marginTop: "3vw", marginLeft: "1vw" }}
                    className="button-rounded-black clickable">
                    Our Services
                  </Button>
                </Col>
                <Col style={{ width: "52%" }}>
                  <p className="p-home">{"Discover the authentic flavors of Portugal on our Food & Wine Tours in Lisbon's oldest neighborhood. Indulge in a variety of local wines, including red, white, palhete, and fortified varietals, along with the famous ''ginjinha'' liqueur. We'll also take you to some of the most historic landmarks and traditional restaurants, where you'll have the chance to experience the local culture and cuisine firsthand. With our expert guides, you are guaranteed an unforgettable gastronomic journey!"}</p>
                </Col>
              </Row>
              <Row style={{ display: "flex", flexDirection: "row", marginTop: "4vw", marginBottom: "6vw" }}>
                <Col style={{ width: "60%" }}>
                  <Image
                    src="/Home2.jpg"
                    alt="Sip Tours Home Page"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col style={{ width: "40%" }}>
                  <Row style={{ display: "flex", flexDirection: "row" }}>
                    <Col style={{ width: "40%" }}></Col>
                    <Col style={{ marginTop: "70%", width: "50%" }}>
                      <h1 className="h1-home" style={{ fontWeight: "400", lineHeight: "1" }}>BACCHUS LISBOA</h1>
                      <Button
                        className="underlined clickable p-home"
                        onClick={() => navigate("/tours/bacchuslisboa")}
                      >
                        View More
                      </Button>
                      <div style={{ marginTop: "2vw" }}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                          <g>
                            <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                          </g>
                        </svg>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ display: "flex", flexDirection: "row", marginTop: "0vw", marginBottom: "6vw" }}>
                <Col style={{ width: "40%" }}>
                  <Row style={{ display: "flex", flexDirection: "row" }}>
                    <Col style={{ marginTop: "110%", width: "70%", marginLeft: "2.5vw" }}>
                      <h1 className="h1-home" style={{ marginLeft: "1vw", fontWeight: "400", lineHeight: "1" }}>A GLIMPSE OF SIP</h1>
                      <Button
                        style={{ marginLeft: "1vw" }}
                        onClick={() => navigate("/tours/glimpseofsip")}
                        className="underlined clickable p-home">
                        View More
                      </Button>
                      <div style={{ marginLeft: "1vw", marginTop: "2vw" }}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                          <g>
                            <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                          </g>
                        </svg>
                      </div>
                    </Col>
                    <Col style={{ width: "50%" }}></Col>
                  </Row>
                </Col>
                <Col style={{ width: "60%" }}>
                  <Image
                    src="/Home3.webp"
                    alt="Sip Tours Home Page"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
              </Row>
              <Row style={{ display: "flex", flexDirection: "row", marginTop: "0vw", marginBottom: "6vw" }}>
                <Col style={{ width: "70%" }}>
                  <Image
                    src="/HomeLisboat.jpg"
                    alt="Sip Tours Home Page"
                    style={{ width: "100%", height: "90vh" }}
                  />
                </Col>
                <Col style={{ width: "40%" }}>
                  <Row style={{ display: "flex", flexDirection: "row" }}>
                    <Col style={{ width: "40%" }}></Col>
                    <Col style={{ marginTop: "78%", width: "50%" }}>
                      <h1 className="h1-home" style={{ fontWeight: "400", lineHeight: "1" }}>LISBOAT & SIP</h1>
                      <Button
                        className="underlined clickable p-home"
                        onClick={() => navigate("/tours/lisboat")}
                      >
                        View More
                      </Button>
                      <div style={{ marginTop: "2vw" }}>
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                          <g>
                            <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                          </g>
                        </svg>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ width: "95vw", marginInline: "auto" }}>
                <Image
                  src="/Home4.jpg"
                  alt="Sip Tours Home Page"
                  style={{ width: "100%", height: "auto" }}
                />
              </Row>
              <Row style={{ display: "flex", flexDirection: "row", marginBottom: "10vw" }}>
                <Col style={{ width: "100%", marginLeft: "3vw", marginTop: "2vw" }}>
                  <h1 className="h1-home" style={{ fontWeight: "400", lineHeight: "1" }}>MEMORABLE<br /> SINTRA</h1>
                  <Button
                    className="underlined clickable p-home"
                    onClick={() => navigate("/tours/sintra")}
                  >
                    View More
                  </Button>
                </Col>
                <Col style={{ width: "10%", alignContent: "right", alignItems: "right", justifyContent: "right" }}>
                  <div style={{ marginTop: "2vw" }}>
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                      <g>
                        <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                      </g>
                    </svg>
                  </div>
                </Col>
              </Row>
              <PreFooter />
            </Layout>
          </>
        )}
    </>
  );
}