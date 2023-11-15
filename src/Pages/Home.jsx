
import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()
  console.log(data);
  return (
    <Row className='mb-5  ms-3 me-3' >
{     data?.length>0?data?.map((products,index)=>(
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
          <Button onClick={()=>dispatch(addToWishlist(products))}  className='btn btn-light'>                        
          <i class="fa-solid fa-heart  fa-2x  me-1 text-danger"></i>
</Button>
          <Button onClick={()=>dispatch(addToCart(products))} className='btn btn-light'>
          <i class="fa-solid fa-cart-plus fa-2x me-1 text-success"></i>

          </Button>
  
</div>      </Card.Body>
    </Card>
      </Col>)):
      <p style={{color:'red'}}>Nothing to display!!!</p>
}   
 </Row>
  )
}

export default Home