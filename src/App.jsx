
import './App.css'
import Header from './components/header/Header'
import Page2Section from './components/page2sections/Page2Section'
import Page5section from './components/page5sections/Page5section'
import Page7section from './components/page7sections/Page7section'

function App() {


  return (
    <>

      {/* page1 start */}
      <div className="d-flex overflow-x-hidden px-md-5 flex-column page1 p-4">
        <img style={{ top: "10vw" }}   className='position-absolute' src="../assets/greeencross1.png" alt="" />
        <Header />
        <div className='d-flex'>
          <div style={{ width: "calc(4vw + 260px)" }} className='page1div d-flex flex-column gap-2 w-25 mx-lg-5 mt-5'>
            <h1 className='fd-1 w-100 fw-bolder text-white letterSpace'>Discover your next Hike</h1>
            <p className='fw-normal text-white '>DISCOVER YOUR NEXT HIKE</p>
            <p className='fw-bold text-white'>Lorem ipsum dolor sit, <br />amet consectetur adipisicing <br />elit. Deserunt </p>
          </div>
          <div className='page1Right '>
            <img className='page1heropic z-1 position-absolute' src="../assets/page1-removebg.png" alt="" />
          </div>
        </div>
      </div>
      {/* page1 end */}

      {/* page2start */}
      <div className="page2 position-relative">

        <img style={{ bottom: "10vh", right: "5vw" }} className='position-absolute' src="../assets/greencross2.png" alt="" />
        <img style={{ top: "12vh", left: "2vw" }} className='position-absolute' src="../assets/greencross2.png" alt="" />
        <h1 className='mx-5 px-5 pt-5 fs-1 fw-normal'>HIKING AND CAMPING</h1>
        <h1 className='mx-5 px-5 fw-bold'>CLASSES</h1>
        <img className='mx-5 px-5' src="../assets/page2cyanline.png" alt="" />
        <div style={{ height: "50vh", width: "100vw" }} className='flex-wrap mt-2 d-flex align-items-center justify-content-center gap-5 '>
          <Page2Section img={"../public/assets/page2bag.png"} h1={"Activities"} />
          <Page2Section img={"../public/assets/page2men.png"} h1={"Hiking"} />
          <Page2Section img={"../public/assets/page2mountain.png"} h1={"Mountains"} />
        </div>
      </div>
      {/* page2end */}


      {/* page3start */}

      <div className="page3 flex-wrap position-relative letterSpace d-flex align-items-center justify-content-center">
        <img style={{ bottom: "30vh", right: "8vw" }} className='position-absolute' src="../assets/redcross.png" alt="" />
        <img style={{ top: "50vh", left: "0vw" }} className='position-absolute z-5' src="../assets/greencross1.png" alt="" />
        <div style={{ minWidth: "350px", width: "40vw" }} className='d-flex flex-column'>
          <h1 className='fw-bolder'>ROCK <br /> CLIMBING</h1>
          <h3 className='mt-4 letterSpace fw-bold '>1. CLASSES & EVENTS</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium assumenda fugit in voluptatum deserunt unde esse, ullam similique soluta ratione nostrum explicabo incidunt expedita reprehenderit nisi! Quos non libero corrupti?</p>
          <hr />
          <p>10 modules <br /> divided into 7 weekends</p>
          <div className='fw-bold d-flex flex-row gap-5'>
            <div> Start <br /> April 15 <br /> 20.00 hs</div>
            <div>Price <br /> $900</div>
          </div>
        </div>
        <div style={{ minWidth: "350px", width: "40vw" }} className='d-flex flex-column gap-3 align-items-center justify-content-center'>
          <div className='page3avatardiv overflow-hidden'>
          </div>
          <h1 style={{ color: "#ff6b14" }} className='fs-4 mt-3 fw-bold fst-italic'>WALKING IN A NATURE <br />AS A RECREATIONAL <br />ACTIVITY</h1>
        </div>
      </div>

      {/* page 3 end */}

      {/* page4 start */}
      <div className="d-flex page4 mb-5 px-sm-5 pt-5  text-white">
        <div style={{ width: "calc(40vw + 100px)" }} className='d-flex mt-5 mx-5 flex-column gap-2'>
          <h1 className='fst-italic mt-2'> BIG BEND NATIONAL PARK <br /> HIKING GUIDE</h1>
          <h4 className='mt-3'>THIS HIKE IS THE NEXT BEST <br /> OPTION </h4>
          <p>LOREM IPSUM</p>
          <button style={{ width: "calc(3vw + 80px)" }} className='p-2 bg-transparent text-white '>see more</button>
        </div>
      </div>
      {/* page 4 end */}


      {/* page5 start */}

      <div className="page5 flex-wrap flex-md-nowrap px-md-5 d-flex justify-content-center align-items-center position-relative">

        <div style={{minWidth: "350px", width: '40vw' }} className='w-100  mx-md-5 px-md-5'>
          <img style={{ bottom: "10vh", right: "10vw" }} className='w-md-100 position-absolute z-5' src="../assets/bluecross.png"
            alt="" />
          <img style={{ top: "1vh", left: "3vw" }} className='position-absolute z-5' src="../assets/bluecross.png"
            alt="" />
          <img style={{ top: "-3vh", left: "8vw" }} className='position-absolute z-5' src="../assets/redcross.png"
            alt="" />
          <h1 className='mt-5 text-center letterSpace '>HOW TO RECOVER FROM <br /> A HIKE</h1>
          <img className='' src="../assets/page2cyanline.png" alt="" />
          <Page5section img={"../public/assets/page2bag.png"} />
          <Page5section img={"../public/assets/page2mountain.png"} />
          <Page5section img={"../public/assets/page2men.png"} />
        </div>
        <div style={{minWidth: "350px", width: '40vw' }} className='w-100 w-md-100 p-md-5 d-flex flex-column justify-content-center align-items-center gap-5'>
        <div className='page3avatardiv overflow-hidden'></div>
          <h4 className='fst-italic text-info fw-bold'>MAKE SURE YOUR  <br />  GEAR FITS</h4>
        </div>
      </div>
      {/* page 5 end */}

      {/* page 6 start */}
      <div className="page6 mb-5 p-5">
        <h2 style={{ color: "#e45600" }} className='px-5 mt-5 fw-bold fst-italic'>WALKING IN NATURE <br /> AS A RECREATIONAL <br /> ACTIVITY</h2>
        <h2 style={{ color: "#ffffff" }} className='px-5 mt-4 fw-bold'>.ACTIVITIES</h2>
        <div className='px-5 text-white mt-4'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</div>
      </div>
      {/* page 6 end  */}

      {/* page 7 start */}
      <div className="page7">
        <h2 className='fw-bold  w-100 text-center  mt-5 letterSpace ' >PLACES TO VISIT <br />IN AUTOMN</h2>
        <div className='d-flex align-items-center  justify-content-center' style={{ height: "50vh", width: "100vw", gap: "10vw" }}>
          <Page7section img={"../public/assets/page7pic1.png"} h1={"National Park"} />
          <Page7section img={"../public/assets/page7pic2.png"} h1={"Mountain Loop"} />
          <Page7section img={"../public/assets/page7pic3.png"} h1={"Canyan Trail"} />
        </div>
      </div>
      {/* page 7 end */}

      {/* page 8 start */}
      <div className=" letterSpace  page3 page8 d-flex align-items-center justify-content-center">
        <div style={{minWidth: "350px", width: "50vw" }} className='d-flex flex-column gap-3 align-items-center '>
          <div className='page3avatardiv overflow-hidden'></div>
          <h1 className='fs-4  text-info mt-3 fw-bold  fst-italic'>WALKING IN A NATURE <br />AS A RECREATIONAL <br />ACTIVITY</h1>
        </div>
        <div style={{ minWidth: "350px", width: "40vw" }} className='d-flex flex-column'>
          <h1 className='fw-bolder'> MOUNTAINEERING<br /> ICE CLIMBING</h1>
          <h3 className='mt-4 fw-bold'>2. ACTIVITIES</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium assumenda fugit in voluptatum deserunt unde esse, ullam similique soluta ratione nostrum explicabo incidunt expedita reprehenderit nisi! Quos non libero corrupti?</p>
          <hr />
          <p>17 modules <br /> divided into 5 weekends</p>
          <div className='fw-bold d-flex flex-row gap-5'>
            <div> Start <br /> April 15 <br /> 20.00 hs</div>
            <div>Price <br /> $900</div>
          </div>
        </div>
      </div>

      {/* page 8 end */}

      {/* page 9 start */}

      <div className="page9 d-flex align-items-center justify-content-center flex-column text-center">
        <h3 className='fw-bold fst-italic text-white'>THE ASANAS PURIFY OUR BODY AND <br /> KEEP IT HEALTHY, MAKING IT SUITA- <br />BLE FOR THE SOUL</h3>
        <img className='page9img mt-2' src="../assets/page9pic.png" alt="" />
        <button className='text-white border-info bg-transparent mt-4 p-2 px-5'>see more</button>
      </div>

      {/* page 9 end */}


      {/* page 10 start */}

      <div className="page10 p-5 d-flex justify-content-center">
        <div className='px-3 px-md-5 w-50 d-flex flex-column gap-2'>
          <h4 className='px-5'>ABOUT</h4>
          <div className='px-5 aboutlorem'>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Vero repellat dignissimos est provident</div>
          <img style={{ width: "calc(8vw + 170px)" }} className='px-5 mt-4' src="../assets/logo.png" alt="" />
        </div>
        <div className='d-flex  mx-5'>
          <div className='li1 mx-2'>
            <h4>ABOUT</h4>
            <br />
            <br />
            <li>Team</li>
            <li>Join us</li>
            <li>Ethic</li>
            <li>Goals</li>
          </div>
          <div className='mx-2'>
            <h4>ABOUT</h4>
            <br />
            <br />
            <li>Team</li>
            <li>Join us</li>
            <li>Ethic</li>
            <li>Goals</li>
          </div>
          <div className='mx-2' >
            <h4>ABOUT</h4>
            <br />
            <br />
            <li>Team</li>
            <li>Join us</li>
            <li>Ethic</li>
            <li>Goals</li>
          </div>
        </div>
      </div>
      {/* page 10 end  */}

      <div className="lastline"></div>
    </>


  )
}

export default App
