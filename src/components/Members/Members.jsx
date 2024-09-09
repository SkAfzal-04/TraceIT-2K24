// import React, { useState, useEffect, useMemo } from "react";
// import "./Members.css";
// import member1 from "../../members/person.png";

// const Members = () => {
//   const membersArr = useMemo(
//     () => [
//       { id: 1, name: "Person1", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 2, name: "Person2", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 3, name: "Person3", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 4, name: "Person4", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 5, name: "Person5", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 6, name: "Person6", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 7, name: "Person7", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 8, name: "Person8", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 9, name: "Person9", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 10, name: "Person10", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 11, name: "Person11", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },

//     ],
//     []
//   );

//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleMembers, setVisibleMembers] = useState([]);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setStartIndex((prevIndex) =>
//         prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [membersArr]);

//   useEffect(() => {
//     const endIndex =
//       startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
//     setVisibleMembers([
//       ...membersArr.slice(startIndex, endIndex),
//       ...(endIndex === membersArr.length
//         ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
//         : []),
//     ]);
//   }, [startIndex, membersArr]);

//   return (
//     <div className="agenda section" id="agenda">
//       <div className="agenda-content container">
//         <div className="section-header">
//           <div className="sub-title">ORGANIZERS</div>
//           <div className="title">Trace.IT 2K24</div>
//         </div>
//       <div className="members-container">
//           <div className="members-wrapper">
//             {visibleMembers.map((member) => (
//               <div className="members-slide" key={member.id}>
//                 <img src={member.image} alt={member.name} />
//                 <p>{member.name}</p>
//                 <div className="cta-buttons">
//                     <div className="tertiary-btn">
//                         <a href={member.whatsappLink}>WhatsApp &gt;</a>
//                 </div>
//               </div>
//             </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Members;

// import React, { useState, useEffect, useMemo } from "react";
// import "./Members.css";
// import member1 from "../../members/person.png";

// const Members = () => {
//   const membersArr = useMemo(
//     () => [
//       { id: 1, name: "Person1", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 2, name: "Person2", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 3, name: "Person3", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 4, name: "Person4", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 5, name: "Person5", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 6, name: "Person6", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 7, name: "Person7", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 8, name: "Person8", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 9, name: "Person9", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 10, name: "Person10", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//       { id: 11, name: "Person11", image: member1, whatsappLink: "https://wa.me/+91XXXXX" },
//     ],
//     []
//   );

//   const [startIndex, setStartIndex] = useState(0);
//   const [visibleMembers, setVisibleMembers] = useState([]);
//   const [isInteracting, setIsInteracting] = useState(false); // add this state

//   useEffect(() => {
//     let interval = setInterval(() => {
//       if (!isInteracting) { // only update startIndex if not interacting
//         setStartIndex((prevIndex) =>
//           prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
//         );
//       }
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [membersArr, isInteracting]);

//   useEffect(() => {
//     const endIndex =
//       startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
//     setVisibleMembers([
//       ...membersArr.slice(startIndex, endIndex),
//       ...(endIndex === membersArr.length
//         ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
//         : []),
//     ]);
//   }, [startIndex, membersArr]);

//   const handleScroll = () => {
//     setIsInteracting(true);
//   };

//   const handleMouseOver = () => {
//     setIsInteracting(true);
//   };

//   const handleMouseLeave = () => {
//     setIsInteracting(false);
//   };

//   return (
//     <div
//       className="members-container"
//       onScroll={handleScroll}
//       onMouseOver={handleMouseOver}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="members-wrapper">
//         {visibleMembers.map((member) => (
//           <div className="members-slide" key={member.id}>
//             <img src={member.image} alt={member.name} />
//             <p>{member.name}</p>
//             <div className="cta-buttons">
//               <div className="tertiary-btn">
//                 <a href={member.whatsappLink}>WhatsApp &gt;</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Members;

import React, { useState, useEffect, useMemo } from "react";
import "./Members.css";
import member1 from "../../members/Arup Maity.jpeg";
import member2 from "../../members/Sk Mahammad Afzal.jpeg";
import member3 from "../../members/Dipti Bhowmik.jpeg";
import member4 from "../../members/Sreya Dhar.jpeg";
import member5 from "../../members/Avik Sen.jpeg";
import member6 from "../../members/Sreejit Chakraborty.jpg";
import member7 from "../../members/Sarthak Mukherjee.jpeg";
import member8 from "../../members/Sayan sett.jpeg";
import member9 from "../../members/Arpitha majee.jpeg";
import member10 from "../../members/Tiyasa saha.jpg";
import member11 from "../../members/Sanchari Pandey.jpg";
import member12 from "../../members/Somnath Mondal.jpeg";
import member13 from "../../members/Shivam Sinha.jpeg";
import member14 from "../../members/Prince Kumar Barnwal.jpeg";
import member15 from "../../members/Amar Kumar Singh.jpeg";



const Members = () => {
  const membersArr = useMemo(
    () => [
      {
        id: 1,
        name: "Arup Maity",
        image: member1,
        whatsappLink: "https://wa.me/+919123927177",
      },
      {
        id: 2,
        name: "Sk Mahammad Afzal",
        image: member2,
        whatsappLink: "https://wa.me/+919679186577",
      },
      {
        id: 3,
        name: "Dipti Bhowmik",
        image: member3,
        whatsappLink: "https://wa.me/+919064148052",
      },
      {
        id: 4,
        name: "Sreya Dhar",
        image: member4,
        whatsappLink: "https://wa.me/+919748375528",
      },
      {
        id: 5,
        name: "Avik Sen",
        image: member5,
        whatsappLink: "https://wa.me/+917980727150",
      },
      {
        id: 6,
        name: "Sreejit Chakraborty",
        image: member6,
        whatsappLink: "https://wa.me/+919831526476",
      },
      {
        id: 7,
        name: "Sarthak Mukherjee",
        image: member7,
        whatsappLink: "https://wa.me/+917439499280",
      },
      {
        id: 8,
        name: "Sayan sett",
        image: member8,
        whatsappLink: "https://wa.me/+917319207343",
      },
      {
        id: 9,
        name: "Arpitha majee",
        image: member9,
        whatsappLink: "https://wa.me/+918100644613",
      },
      {
        id: 10,
        name: "Tiyasa Saha",
        image: member10,
        whatsappLink: "https://wa.me/+919433077890",
      },
      {
        id: 11,
        name: "Sanchari Pandey",
        image: member11,
        whatsappLink: "https://wa.me/+919749815573",
      },
      {
        id: 12,
        name: "Somnath Mondal",
        image: member12,
        whatsappLink: "https://wa.me/+917980832102",
      },
      {
        id: 13,
        name: "Shivam Sinha",
        image: member13,
        whatsappLink: "https://wa.me/+919572844644",
      },
      {
        id: 14,
        name: "Prince Kumar Barnwal",
        image: member14,
        whatsappLink: "https://wa.me/+919631755708",
      },
      {
        id: 15,
        name: "Amar Kumar Singh",
        image: member15,
        whatsappLink: "https://wa.me/+918228893359",
      },
      
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!isInteracting) {
        setStartIndex((prevIndex) =>
          prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr, isInteracting]);

  useEffect(() => {
    const endIndex =
      startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  const handleScroll = () => {
    setIsInteracting(true);
  };

  const handleMouseOver = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? membersArr.length - 5 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex === membersArr.length - 5 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ORGANIZERS</div>
          <div className="title"><span class="traceDes">TRACE</span>.IT 2K24</div>
        </div>
        <div
          className="members-container"
          onScroll={handleScroll}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                  <div className="tertiary-btn">
                    <a href={member.whatsappLink}>WhatsApp &gt;</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="nav-buttons">
            <button className="prev" onClick={handlePrev}>
              &lt; Prev
            </button>
            <button className="next" onClick={handleNext}>
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
