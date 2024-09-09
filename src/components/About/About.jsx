import React from "react";
import EventCard from "../EventCard/EventCard";
import "./About.css";

import Quiz from "../../img/quiz.png";
import Innovative from "../../img/technology.png";
import BlindCoding from "../../img/blind.png";

const About = () => {
    return (
        <div className="about section" id="about">
            <div className="about-content container">
                <div className="section-header">
                    <div className="sub-title">ABOUT THE EVENT</div>
                    <div className="title">What is <span class="traceDes">TRACE</span>.IT 2K24?</div>
                </div>
                <div className="about-text">
                    <div>
                    <span class="traceDes">TRACE</span>.IT is the annual technical event organized by the IT Department of MCKV Institute of Engineering, is set to deliver an exceptional experience for students looking to prove their mettle in the fields of critical thinking, vigilance, and curiosity. 
                    </div>
                    <div>
                    <span class="traceDes">TRACE</span>.IT promises to deliver a unique opportunity to showcase your intellect and knowledge, and emerge as a true champion of your field.
                    </div>
                    <div>
                        Students of all departments will compete in teams to prove their knowledge and skills.
                    </div>
                    <div>The event comprises of 3 rounds as follows:</div>
                </div>
                <div className="round-cards">
                    <EventCard
                        roundNum="1"
                        roundName="Cognitive Conundrum"
                        subtitle="(All Registered Teams)"
                        icon={Quiz}
                        // description="MCQ-based questions based on aptitude, Coding, and GK."
                        description="Answer 30 MCQ questions in 30 minutes based on Aptitude, Technical and General Knowledge."
                    ></EventCard>
                    <EventCard
                        roundNum="2"
                        roundName="Shadow Code Sprint"
                        subtitle="(Top 20% teams from Round-1)"
                        icon={BlindCoding}
                        description="Coding questions need to be solved by participants which will be judged on the basis of speed( the screen will be hidden)."
                    ></EventCard>
                    <EventCard
                        roundNum="3"
                        roundName="Tech Treek"
                        subtitle="(Top 5 teams from Round-2)"
                        icon={Innovative}
                        description="Teams have 40 minutes to brainstorm and submit an idea on a given topic. Selected teams get 10 minutes to present their idea."
                    ></EventCard>
                </div>
            </div>
        </div>
    );
};

export default About;
