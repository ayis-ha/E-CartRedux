import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFromWishlist} from '../redux/wishlistSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer.wishlist)
  const dispatch= useDispatch()

   const removeItem =(id)=>{
     console.log("inside remove item",id);
     dispatch(deleteFromWishlist(products.id))
   }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='mb-5 ms-5'>
       {
        wishlistArray.length>0?
        wishlistArray.map((products,index)=>(
          <Col key={index} sm={12} md={6} lg={4} xl={3} className='mb-3' style={{marginTop:'100px'}}>
      <Card style={{ width: '18rem',height:'27rem' }} className='shadow'>
      <Card.Img height={'200px'} variant="top" src={products?.thumbnail} />
      <Card.Body>
        <Card.Title >{products?.title.slice(0,20)}... </Card.Title>
        <Card.Text>
         <p >{products?.description.slice(0,50)}... </p>
         <p className='fw-bolder'>${products?.price} </p>
        </Card.Text>
<div className='d-flex justify-content-evenly'>
          <Button onClick={()=>dispatch(deleteFromWishlist(products.id))}  className='btn btn-light'>                        
          <i class="fa-solid fa-trash  fa-2x  me-1 text-danger"></i>
             </Button>
          <Button className='btn btn-light'>
          <i class="fa-solid fa-cart-plus fa-2x me-1 text-success"></i>

          </Button>
  
</div>      </Card.Body>
    </Card>
      </Col>
        )):<p className='fw-bolder text-danger'>Your wishlist is empty</p>
       }
      </Row>
    </div>
  )
}

export default Wishlist