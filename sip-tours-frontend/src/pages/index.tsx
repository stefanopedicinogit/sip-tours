import useIsMobile from '@/hooks/useIsMobile';
import useNavigate from '@/hooks/useNavigate';
import React, { useEffect, useState } from 'react';

function VideoPlayer() {
  return (
    <div className='dark-video'>
      <video className='video-lisbon' muted autoPlay loop style={{ zIndex: -1, width: '100%', height: '100vh' }}>
        <source src="/Lisbon.mp4" type="video/mp4" />
      </video>
    </div>

  );
}

export default function VideoStart() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <div className="hide-scroll video-container" style={{ position: 'relative' }}>
          <VideoPlayer />
          <h1 className="white" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "400", fontSize: "4vw", lineHeight: "4vw", position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            WELCOME <br /> SIP TOURS
          </h1>
          <h2 className="white" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "1.7vw", position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            EXPERIENCE PORTUGAL
          </h2>
          <div onClick={() => navigate('/home')} className='white' style={{ display: 'flex', flexDirection: 'row', gap: '2.5vw', fontFamily: "Helvetica, Arial, sans-serif", position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, cursor: 'pointer' }}>
            <p style={{ fontSize: "1.5vw", marginTop: "1.5vw" }}>EXPLORE</p>
            <svg style={{ fill: 'white' }} preserveAspectRatio="xMidYMid meet" data-bbox="21.1 72.3 158.1 49.8" xmlns="http://www.w3.org/2000/svg" width="4vw" height="5vw" viewBox="21.1 72.3 158.1 49.8" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
              <g>
                <path d="M154.8 72.3l-2 2L174 94.9 21.1 95v2.7l153-.1-22.2 22.5 1.9 2 25.4-25.8-24.4-24z"></path>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <div className="hide-scroll video-container" style={{ position: 'relative' }}>
          <VideoPlayer />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: "absolute", top: "20%" }}>
              <h1 className="white" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "400", fontSize: "15vw", lineHeight: "15vw", zIndex: 1 }}>
                WELCOME <br /> SIP TOURS
              </h1>
              <h2 className="white" style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "6.5vw", zIndex: 1 }}>
                EXPERIENCE PORTUGAL
              </h2>
            </div>
            <div onClick={() => navigate("/home")} className='white' style={{ display: 'flex', flexDirection: 'row', gap: '2.5vw', fontSize: "5vw", fontFamily: "Helvetica, Arial, sans-serif", position: 'absolute', top: '80%', zIndex: 1, cursor: 'pointer' }}>
              <p style={{ marginTop: "1.5vw" }}>EXPLORE</p>
              <svg style={{ fill: 'white' }} preserveAspectRatio="xMidYMid meet" data-bbox="21.1 72.3 158.1 49.8" xmlns="http://www.w3.org/2000/svg" width="10vw" height="10vw" viewBox="21.1 72.3 158.1 49.8" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                <g>
                  <path d="M154.8 72.3l-2 2L174 94.9 21.1 95v2.7l153-.1-22.2 22.5 1.9 2 25.4-25.8-24.4-24z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}