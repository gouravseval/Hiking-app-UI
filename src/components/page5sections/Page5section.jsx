import React from 'react';
import "../../App.css"

function Page5section({ img }) {
  return (
    <div className='text-dark text-center justify-content-center w-100 mx-md-0 d-flex align-items-center gap-3 ' style={{ width: "60vw", height: "23vh" }}>
      <img style={{ height: "calc(50px + 4vw)", width: "calc(50px + 4vw)" }} src={img} alt="" />
      <div className='d-flex lorem flex-column' style={{ color: "black" }}>
        <li className='lorem'>Lorem, ipsum dolor </li>
        <li className='lorem'>Lorem, ipsum dolor  </li>
        <li className='lorem'>Lorem, ipsum dolor  </li>
        <li className='lorem'>Lorem, ipsum dolor </li>
      </div>
    </div>
  );
}

export default Page5section;
