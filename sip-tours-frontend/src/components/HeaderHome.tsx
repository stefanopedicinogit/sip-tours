import styled from "styled-components";
import ThemeColor from "./ThemeColor";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from "./Layout";
import { useState } from "react";
import useNavigate from "@/hooks/useNavigate";

const NavigationContainer = styled.nav`
  background-color: ${ThemeColor.whiteHome};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px; /* Adjust the height as needed */
    background-color: rgba(0, 0, 0, 0.1); /* Shadow color */
  }

  @media only screen and (min-width: 768px) {
    padding: 1vw 0;
  }
`;

const Logo = styled.img`
  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    display: block;
    height: 3vw;
  }

  &:hover {
    cursor: pointer;
  }
`;

const HeaderNavigation = styled.ul`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin: 0;

    @media only screen and (min-width: 768px) {
		  & > li, & > li > a {
			color: #919191;
		  }

		  & > li[data-active="true"] {
			position: relative;

			& > a {
				color: ${ThemeColor.darkgray};
			}

			&::before {
				transform: translateX(-50%);
				border-radius: 100%;
				position: absolute;
				background: transparent;
				bottom: -40%;
				content: "";
				width: 0.5rem;
				height: 0.5rem;
				left: 50%;
			} 
		  }
	  }};

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderNavigationItem = styled.li`
  font-weight: 400;

  list-style-type: none;
  color: ${ThemeColor.black};
  font-size: 1.5vw;

  &:hover {
    cursor: pointer;
  }

  & > a {
    color: ${ThemeColor.black};
    text-decoration: none;
  }
`;

const ModalNavigation = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9;
  background-color: ${ThemeColor.pinkHome};
`;

export default function HeaderHome() {
  const [showNavModal, setShowNavModal] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <ModalNavigation hidden={!showNavModal}>
          <Container style={{ display: "flex", flexDirection: "row" }}>
            <Container style={{ marginTop: "12vw", display: "flex", flexDirection: "row" }}>
              <div style={{ display: 'flex', flexDirection: 'column', fontFamily: "Helvetica, Arial, sans-serif", marginLeft: "12vw" }}>
                <ul className="modal-navbar-links clickable">
                  <li style={{ marginBottom: '0vw' }} onClick={() => navigate('/home')}>HOME</li>
                  <li style={{ marginTop: '0vw' }} onClick={() => navigate('/services')}>SERVICES</li>
                  <li onClick={() => navigate('/about')}>ABOUT&nbsp;US</li>
                  <li onClick={() => navigate('/contact')}>CONTACT</li>
                </ul>
              </div>
            </Container>
            <Container style={{ marginTop: "14vw", marginLeft: "18vw" }}>
              <div style={{ display: 'flex', flexDirection: 'column', fontFamily: "Helvetica, Arial, sans-serif", color: 'white', fontSize: "2vw", marginBottom: "3vw" }}>
                <h5>Working&nbsp;all&nbsp;around&nbsp;Portugal</h5>
                <h5>Based&nbsp;in&nbsp;Lisbon</h5>
              </div>
              <span style={{ textDecoration: 'underline', fontFamily: "Helvetica, Arial, sans-serif", color: 'white', fontSize: "2vw" }}>info@sip-tours.com</span>
              <ul style={{ fontFamily: "Helvetica, Arial, sans-serif", color: 'white', fontSize: "2vw", marginTop: "3vw" }} className="clickable">
                <li style={{ display: "flex", flexDirection: "row", gap: "2vw" }}>
                  <svg style={{ transform: "rotate(90deg)", fill: "white" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                  Book Now
                </li>
                <li style={{ display: "flex", flexDirection: "row", gap: "2vw" }}>
                  <svg style={{ transform: "rotate(90deg)", fill: "white" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                  Facebook
                </li>
                <li style={{ display: "flex", flexDirection: "row", gap: "2vw" }}>
                  <svg style={{ transform: "rotate(90deg)", fill: "white" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                  Instagram
                </li>
                <li style={{ display: "flex", flexDirection: "row", gap: "2vw" }}>
                  <svg style={{ transform: "rotate(90deg)", fill: "white" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                  Whatsapp
                </li>
              </ul>
            </Container>
            <Container style={{ marginTop: "8vw", marginLeft: "10vw", marginRight: "5vw" }}>
              <FontAwesomeIcon style={{ color: 'white' }} className="clickable" icon={faTimes} size="3x" onClick={() => { setShowNavModal(!showNavModal) }} />
            </Container>
          </Container>
        </ModalNavigation>
        <NavigationContainer>
          <HeaderWrapper>
            <Logo
              src='/SIPLogoNero.svg'
              alt="Logo SIP"
              style={{height: "2vw", cursor: "pointer", marginLeft:"3vw" }}
              onClick={() => navigate("/home")}
            />
            <HeaderNavigation
              style={{ marginLeft: "auto", marginRight: "5vw" }}
            >
              <HeaderNavigationItem
                onClick={() => navigate('/services')}
              >
                <div style={{ display: "flex", flexDirection: "row", gap: "1vw" }} onClick={() => { navigate("/services") }}>
                  What We Do
                  <svg style={{ transform: "rotate(90deg)", marginTop: "0.5vw" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                </div>
              </HeaderNavigationItem>
              <HeaderNavigationItem
                onClick={() => navigate('/about')}
              >
                <div style={{ display: "flex", flexDirection: "row", gap: "1vw" }}>
                  Who We Are
                  <svg style={{ transform: "rotate(90deg)", marginTop: "0.5vw" }} preserveAspectRatio="xMidYMid meet" data-bbox="19.2 22.3 160.1 158.5" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="19.2 22.3 160.1 158.5" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                    <g>
                      <path d="M88.5 22.3v5.8h80.9L19.2 176.7l4.1 4.1L173.6 32.1v80.2h5.7v-90H88.5z"></path>
                    </g>
                  </svg>
                </div>
              </HeaderNavigationItem>
              <Button
                className="button-rounded-black clickable" style={{ marginTop: "0.5vw" }}>
                Book Now
              </Button>
              <FontAwesomeIcon className="clickable" icon={faBars} size="2x" onClick={() => { setShowNavModal(!showNavModal) }} />
            </HeaderNavigation>
          </HeaderWrapper>
        </NavigationContainer>
      </Layout>
    </>
  )
}