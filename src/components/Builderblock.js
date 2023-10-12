import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Builderblock = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/BuilderBlock')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      {data.map((d, i) => (
        <div className='builderblock' key={i}>
          <img className="css-1qgv5r7-Img" alt="Zapier" aria-hidden="false" data-testid="img" loading="lazy" src={d.BuilderBlockImage} style={{
            width: '1200px',
            height: '324px',
            borderRadius: '5px'
          }}></img>
        </div>

      ))
      }
    </>
  )
}

export default Builderblock
