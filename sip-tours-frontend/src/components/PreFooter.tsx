import { Col, Row, Button } from "react-bootstrap";

export default function PreFooter () {
return(
    <>
    <Row style={{ width: "95vw", marginInline: "auto", display: "flex", flexDirection: "row", marginBottom:"10vw"}}>
    <Col style={{ width: "80%" }}>
      <h2 className="h2-home" style={{ marginBottom: "2.5vw" }}>Find us all around Portugal<br />Based in Lisbon</h2>
      <h2 className="h2-home" style={{ textDecoration: "underline", marginBottom: "2.5vw" }}>info@sip-tours.com</h2>
      <h2 className="h2-home">Tel: +351 964 212 524</h2>
    </Col>
    <Col style={{ width: "20%", display: "flex", flexDirection: "column" }}>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Button
          className="underlined clickable h3-home">
          Book Now
        </Button>
        <svg style={{marginTop: "1vw", marginLeft: "0.8vw", transform: "rotate(90deg)"}} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
          <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
        </svg>
      </Row>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Button
          className="clickable h3-home">
          Facebook
        </Button>
        <svg style={{marginTop: "1vw", marginLeft: "1.3vw", transform: "rotate(90deg)"}} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
          <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
        </svg>
      </Row>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Button
          className="clickable h3-home">
          Instagram
        </Button>
        <svg style={{marginTop: "1vw", marginLeft: "0.8vw", transform: "rotate(90deg)"}} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
          <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
        </svg>
      </Row>
      <Row style={{ display: "flex", flexDirection: "row" }}>
        <Button
          className="clickable h3-home">
          WhatsApp
        </Button>
        <svg style={{marginTop: "1vw", marginLeft: "0.6vw", transform: "rotate(90deg)"}} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
          <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
        </svg>
      </Row>

    </Col>
  </Row>
  </>
)
}