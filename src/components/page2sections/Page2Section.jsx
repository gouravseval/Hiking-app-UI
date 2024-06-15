import React from 'react';

function Page2Section({img, h1}) {
  return (
    <div className='text-dark text-center d-flex flex-column gap-3 align-items-center  mt-5 mt-lg-0' style={{minWidth: "325px", width: "25vw", height: "30vh"}}>
      <img style={{height: "calc(60px + 5vw)", width: "calc(60px + 5vw)"}} src={img} alt="" />
      <h1 className='text-center'>{h1}</h1>
      <p style={{color: "black"}}>Lorem ipsum dolor, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit! Quis ea ducimus impedit officia maxime facere </p>
    </div>
  );
}

export default Page2Section;
