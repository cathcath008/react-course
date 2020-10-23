import React from 'react';
import './home.css';
// import Image from '../rambuthijau.jpeg';
// import Image1 from '../facebook.png';
// import Image2 from '../twitter.png';
// import Image3 from '../whatsapp.png';

const Home = () => {
  return (
    // <div>Welcome Home!</div>;
    <div className="about">
      <h1>Hello, My name is Cathrien Agustin</h1>
      <p>
        Saya merupakan fresh graduate jurusan Informatika dari Universitas
        Telkom. Saya orang yang ramah dan pekerja keras, saya menyukai
        mempelajari hal-hal baru.
      </p>
      <img src="../rambuthijau.jpeg" alt="" />
      <h2>Contact Me</h2>
      <div className="info">
        <span>
          <img src="../facebook.png" alt="" />
          Cathrien Agustin
        </span>
        <span>
          <img src="../twitter.png" alt="" />
          @cathnevanos
        </span>
        <span>
          <img src="../whatsapp.png" alt="" />
          08988359596
        </span>
      </div>
    </div>
  );
};

export default Home;
