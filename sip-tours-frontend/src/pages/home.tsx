import Layout from "@/components/Layout";
import ThemeColor from "@/components/ThemeColor";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigate from "@/hooks/useNavigate";
import { Button, Col, Image, Row } from "react-bootstrap";


export default function Home() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (<></>) :
        (
          <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
            <Row style={{ width: "90vw", marginInline: "auto" }}>
              <h1 className="h1-home">PORTUGUESE WINE & FOOD EXPERIENCES</h1>
              <h3 className="h3-home">Explore the flavours of Portugal and experience our unique culture and history. </h3>
              <div style={{ marginTop: "2vw", marginBottom: "3.5vw", marginLeft: "1vw" }}>
                <Button
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
                <p className="p-home"> Sip was born with the intention of sharing our knowledge and passion for the food and wine heritage of Portugal with others. Our team of dedicated professionals is committed to providing a welcoming and engaging environment for wine and food enthusiasts of all levels. With a focus on education, conviviality, entertainment, and professional expertise, we are proud to offer the very best experience to discover and explore the wonderful world of Portugal. </p>
              </Col>
              <Col style={{ width: "40%" }}>
                <div style={{ marginTop: "15vw", marginBottom: "3.5vw", marginLeft: "15vw" }}>
                  <Button
                    className="button-rounded-black clickable">
                    Book Here
                  </Button>
                </div>
              </Col>
            </Row>
            <Row style={{ width: "92.5vw", marginTop: "1vw", marginInline: "auto", marginBottom: "6vw" }}>
              <Button
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
                <h3 style={{fontSize:"1.55vw"}} className="h3-home underlined">
                  Our Wine and Food Exclusive Tours & Experiences
                </h3>
                <Button
                  style={{ marginTop: "3vw", marginLeft: "1vw" }}
                  className="button-rounded-black clickable">
                  Book Here
                </Button>
              </Col>
              <Col style={{ width: "50%" }}>
                <p className="p-home">Discover the authentic flavors of Portugal on our Wine & Food Tours in Lisbon's oldest neighborhood. Indulge in a variety of local wines, including red, white, palhete, and fortified varietals, along with the famous "ginjinha" liqueur. We'll also take you to some of the most historic landmarks and traditional restaurants where you'll have the chance to experience the local culture and cuisine. With our expert guides, you are guaranteed an unforgettable gastronomic journey.</p>
              </Col>
            </Row>
          </Layout>
        )}
    </>
  );
}