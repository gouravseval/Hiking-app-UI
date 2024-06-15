import React from 'react';

function Page7section({img, h1}) {
  return (
    <div className='text-dark text-center d-flex flex-column  align-items-center' style={{width: "20vw", height: "25vh"}}>
      <img style={{height: "calc(60px + 8vw)", width: "calc(60px + 8vw)", borderRadius: "50%", backgroundPosition: "center", backgroundSize:"cover"}} src={img} alt="" />
      <h2 className='mt-3 text-center '>{h1}</h2>
      <p style={{color: "black"}}>Lorem ipsum dolor, Lorem <br /> ipsum impedit </p>
      <hr className='w-100'/>
      <div className='fw-bold'>Location <span className='fw-normal'>0.3 miles.</span></div>
      
    </div>
  );
}

export default Page7section;
