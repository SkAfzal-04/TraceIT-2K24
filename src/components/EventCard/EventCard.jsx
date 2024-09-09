// import React from "react";
// import "./EventCard.css";

// const EventCard = ({ roundNum, roundName, subtitle, icon, description }) => {
//     return (
//         <div className="eventcard">
//             <div className="eventcard-content">
//                 <div className="round-details">
//                     <div className="round-num">Round {roundNum}</div>
//                     <div className="round-name">{roundName}</div>
//                     <div className="round-subtitle">{subtitle}</div>
//                 </div>
//                 <div className="icon">
//                     <img src={icon} alt="round-icon" />
//                 </div>
//                 <div className="round-desc">{description}</div>
//             </div>
//         </div>
//     );
// };

// export default EventCard;


// import React, { useState } from "react";
// import "./EventCard.css";

// const EventCard = ({ roundNum, roundName, subtitle, icon, description }) => {
//     const [style, setStyle] = useState({});

//     const handleMouseMove = (e) => {
//         const card = e.currentTarget;
//         const { left, top, width, height } = card.getBoundingClientRect();
//         const x = (e.clientX - left) / width; // Mouse X position relative to the card width
//         const y = (e.clientY - top) / height; // Mouse Y position relative to the card height
//         const rotateX = (y - 0.5) * 30; // Adjust the multiplier to control the tilt
//         const rotateY = (x - 0.5) * -30; // Adjust the multiplier to control the tilt

//         setStyle({
//             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
//         });
//     };

//     const handleMouseLeave = () => {
//         setStyle({
//             transform: `rotateX(0deg) rotateY(0deg) scale(1)`,
//             transition: "transform 0.3s ease-out", // Smooth transition back to normal
//         });
//     };

//     return (
//         <div
//             className="eventcard"
//             style={style}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className="eventcard-content">
//                 <div className="round-details">
//                     <div className="round-num">Round {roundNum}</div>
//                     <div className="round-name">{roundName}</div>
//                     <div className="round-subtitle">{subtitle}</div>
//                 </div>
//                 <div className="icon">
//                     <img src={icon} alt="round-icon" />
//                 </div>
//                 <div className="round-desc">{description}</div>
//             </div>
//         </div>
//     );
// };

// export default EventCard;


// import React, { useState } from "react";
// import "./EventCard.css";

// const EventCard = ({ roundNum, roundName, subtitle, icon, description }) => {
//     const [style, setStyle] = useState({});

//     const handleMouseMove = (e) => {
//         const card = e.currentTarget;
//         const { left, top, width, height } = card.getBoundingClientRect();
//         const x = (e.clientX - left) / width;
//         const y = (e.clientY - top) / height;
//         const rotateX = (y - 0.5) * 30;
//         const rotateY = (x - 0.5) * -30;

//         const shadowX = (x - 0.5) * 50; // Shadow offset relative to the card
//         const shadowY = (y - 0.5) * 50;
//         const shadowBlur = 50; // Shadow blur amount

//         setStyle({
//             transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
//             boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(1, 254, 1, 0.3)`, // Dynamic shadow
//         });
//     };

//     const handleMouseLeave = () => {
//         setStyle({
//             transform: `rotateX(0deg) rotateY(0deg) scale(1)`,
//             boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.2)`, // Default shadow
//             transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
//         });
//     };

//     return (
//         <div
//             className="eventcard"
//             style={style}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className="eventcard-content">
//                 <div className="round-details">
//                     <div className="round-num">Round {roundNum}</div>
//                     <div className="round-name">{roundName}</div>
//                     <div className="round-subtitle">{subtitle}</div>
//                 </div>
//                 <div className="icon">
//                     <img src={icon} alt="round-icon" />
//                 </div>
//                 <div className="round-desc">{description}</div>
//             </div>
//         </div>
//     );
// };

// export default EventCard;


import React, { useState } from "react";
import "./EventCard.css";

const EventCard = ({ roundNum, roundName, subtitle, icon, description }) => {
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = (y - 0.5) * 30;
        const rotateY = (x - 0.5) * -30;

        const shadowX = (x - 0.5) * 50;
        const shadowY = (y - 0.5) * 50;
        const shadowBlur = 50;

        // Calculate shadow color based on the glow keyframe animation
        const borderColor = getComputedStyle(card).borderColor;

        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
            boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${borderColor}`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: `rotateX(0deg) rotateY(0deg) scale(1)`,
            boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.2)`,
            transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
        });
    };

    return (
        <div
            className="eventcard"
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="eventcard-content">
                <div className="round-details">
                    <div className="round-num">Round {roundNum}</div>
                    <div className="round-name">{roundName}</div>
                    <div className="round-subtitle">{subtitle}</div>
                </div>
                <div className="icon">
                    <img src={icon} alt="round-icon" />
                </div>
                <div className="round-desc">{description}</div>
            </div>
        </div>
    );
};

export default EventCard;
