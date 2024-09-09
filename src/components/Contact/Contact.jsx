import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact section" id="contact">
            <div className="contact-content container">
                <div className="section-header">
                    <div className="sub-title">CONTACT US</div>
                    <div className="title">Have a question?</div>
                </div>
                <div className="contact-text">
                    <div>
                        If you have any further query contact our advisories, feel free to contact us.
                    </div>
                    <div>
                        <span className="contact-heading">
                            Student In-Charges
                        </span>
                        <div>Sk Mahammad Afzal: +91 96791 86577 </div>
                        <div>Sreya Dhar: +91 97483 75528</div>
                        <div>Sanchari Pandey: +91 97498 15573</div>
                        <div>Dipti Bhowmik: +91 90641 48052</div>
                    </div>
                    <div>
                        <span className="contact-heading">
                        Teacher Co-ordinater
                        </span>
                        <div>Prof. Jayanti Mahata: +91 97325 26103</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
