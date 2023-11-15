import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%',height:'400px',backgroundColor:'black'}}>
         <div className="footer d-flex  justify-content-evenly w-100 " style={{color:'white'}}>
            <div className="website" style={{width:'300px'}}>
                <h4>
                <i class="fa-solid fa-cloud-arrow-up fa-beat me-3"></i>
                    E-Cart website
                </h4>
                <h6>
                    Designed and built with all the love in the world by the Bootstrap team with the help of our contributers.
                </h6>
                   <h6>
                    Code licenced MIT, docs CC BY 3.0.
                   </h6>
                   <p>Currently v5.3.2</p>
            </div>
<div className="links d-flex flex-column">
    <h4 >Links</h4>
    <Link to={'./'} style={{textDecoration:"none",color:"white"}}>Home</Link>
    <Link to={'./'} style={{textDecoration:"none",color:"white"}}>Cart</Link>
    <Link to={'./'} style={{textDecoration:"none",color:"white"}}>Wishlist </Link>


</div>
<div className="guides d-flex flex-column">
    <h4>Guides</h4>
    <Link to={'https://react.dev/'} style={{textDecoration:"none",color:"white"}}>React</Link>
    <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
    <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:"none",color:"white"}}>Routing </Link>


</div>

         </div>
      <p style={{color:'white'}}>Copyright © 2023 E-Cart. Built with React.</p>
    </div>
  )
}

export default Footer   