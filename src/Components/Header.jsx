import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const Wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer.cart)

  return (
<nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'purple',height:'80px',position:'fixed',width:'100%',zIndex:'1'}}>
            <div className="container px-4 px-lg-5">
                <Link to={'/'} className="navbar-brand text-light" >E-Cart</Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                    <form className="d-flex">
                        <Link to={'/wishlist'} className="btn  btn-outline-light me-2 " type="submit">
                        <i class="fa-solid fa-heart  fa-xl  me-1 text-danger"></i>
  wishlist
                            <span className="badge bg-light text-dark ms-1 rounded-pill">{Wishlist.length}</span>
                        </Link>
                        <Link to={'/cart'} className="btn btn-outline-light " type="submit">
                        <i class="fa-solid fa-cart-plus fa-xl me-1"></i>
cart
                            <span className="badge bg-light text-dark ms-1 rounded-pill">{cart.length}</span>
                        </Link>
                    </form>
                
            </div>
        </nav>  )
}

export default Header