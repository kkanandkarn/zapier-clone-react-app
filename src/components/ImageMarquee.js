import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ImageMarquee = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/imagemarquee')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="marquee">

      {data.map((d, i) => (
        <div className="image-marquee" key={i}>
          <img src={d.image1} alt="description of first" className="marquee-image" />
          <img src={d.image2} alt="description of second" className="marquee-image" />
          <img src={d.image3} alt="description of third" className="marquee-image" />
          <img src={d.image4} alt="description of first" className="marquee-image" />
          <img src={d.image5} alt="description of second" className="marquee-image" />
          <img src={d.image6} alt="description of third" className="marquee-image" />
          <img src={d.image7} alt="description of first" className="marquee-image" />
          <img src={d.image8} alt="description of second" className="marquee-image" />
          <img src={d.image9} alt="description of third" className="marquee-image" />
          <img src={d.image10} alt="description of first" className="marquee-image" />
          <img src={d.image11} alt="description of second" className="marquee-image" />
          <img src={d.image12} alt="description of third" className="marquee-image" />
        </div>
      ))
      }
    </div>
  );
};

export default ImageMarquee;
