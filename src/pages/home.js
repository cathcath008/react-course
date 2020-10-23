import React, { useState } from 'react';
import './home.css';
import useTitle from '../utility/customHook';
// import Image from '../rambuthijau.jpeg';
// import Image1 from '../facebook.png';
// import Image2 from '../twitter.png';
// import Image3 from '../whatsapp.png';

const Home = () => {
  const [count, setCount] = useTitle();
  const [myNumber, setMyNumber] = useState(0);
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
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Like
      </button>
      <h2>{count}</h2>
      <button
        type="button"
        onClick={() => {
          setMyNumber(myNumber + 1);
        }}
      >
        Dislike
      </button>
      <h2>{myNumber}</h2>
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
