import React from 'react';
import './experience.css';

//CARA LAMA UNTUK MENDUPLIKASI
const Experience = () => {
  return (
    <div className="content">
      <h2>EXPERIENCE</h2>
      <div className="experience">
        <p className="title">
          <b>Front End Dev</b>
        </p>
        <small>
          Implementing UI design into mobile application, make sure the
          interface work properly in iOs and Android
        </small>
      </div>
      <div className="experience">
        <p className="title">
          <b>Marketing Crew Intern</b>
        </p>
        <small>
          Implementing UI design into mobile application, make sure the
          interface work properly in iOs and Android
        </small>
      </div>
      <div className="experience">
        <p className="title">
          <b>Assistant Lecturer of Matrix and Vector Space</b>
        </p>
        <small>
          Implementing UI design into mobile application, make sure the
          interface work properly in iOs and Android
        </small>
      </div>
    </div>
  );
};

// CARA CEPAT MENDUPLIKASI DENGAN PROPS
// const Experience = (props) => {
//   return (
//     <div className="experience">
//       <img src="../marketing.jpg" alt="" />
//       <p className="title">
//         <b>{props.name}</b>
//       </p>
//       <small>{props.job}</small>
//     </div>
//   );
// };

export default Experience;
