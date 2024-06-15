import React from 'react';

function Header() {
    return (

        <nav className="navbar postion-absolute z-2 navbar-expand-lg header navbar-light ">
            <div className="container-fluid z-2 d-flex justify-content-between p-3 gap-5">
            <div style={{ color: "white"}} className="mt-5 z-2 px-4 p-5 d-none fs-5 fw-medium d-lg-flex align-items-end gap-5" >
            <img style={{width: "calc(8vw + 80px)"}} className='' src="../../../public/assets/logo.png" alt="" />
                        <a className="nav-link z-2" href="#">Home</a>
                        <a className="nav-link z-2" href="#">Class</a>
                        <a className="nav-link z-2" href="#">Promo</a>
                        <a className="nav-link z-2" href="#">Online Class</a>
                        <a className="nav-link z-2" href="#">Contact</a>
                    </div>
                <img style={{width: "calc(8vw + 80px)"}} className='d-lg-none z-2' src="../../../public/assets/logo.png" alt="" />
                <button style={{width: "calc(2vw + 23px)"}} className="d-lg-none rounded z-2 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=" navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse z-2" id="navbarNavAltMarkup">
                    <div  style={{ color: "white", backgroundColor: "#15212b",}}  className="z-2 fs-6 navbar-nav gap-3 d-flex d-lg-none align-items-center" >
                        <a className="nav-link z-2" href="#">Home</a>
                        <a className="nav-link z-2" href="#">Class</a>
                        <a className="nav-link z-2" href="#">Promo</a>
                        <a className="nav-link z-2" href="#">Online Class</a>
                        <a className="nav-link z-2" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Header;
