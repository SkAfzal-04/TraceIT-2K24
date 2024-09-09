import React from "react";
import "./Cta.css";

const Cta = () => {
    return (
        <div className="cta">
            <div className="cta-content container">
                <div className="cta-heading">Don't forget to register for an unforgettable event experience...</div>
                <div className="cta-heading">See you all there!</div>
                <div className="main-btn">
                    <a
                        href="https://forms.gle/nEYgrjLcSym2vAVP9"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Register Now 🫵 &gt;
                    </a>
                </div>
                <div className="follow-btn1">
                    <a
                        href="https://www.instagram.com/invites/contact/?igsh=kvhochijqkt&utm_content=vgr03cd"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Follow Us 😎 &gt;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cta;
