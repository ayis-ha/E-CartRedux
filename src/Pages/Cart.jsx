import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const cartArray =useSelector((state)=>state.cartReducer.cart)
  return (
    <div>
      {
        cartArray.length>0?
     
        <table className='container mt-5  table  border rounded  p-5' >
        <thead style={{marginTop:'400px'}}>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cartArray.map((products,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{products.title}</td>
                    <td> <img width={'100px'} height={'100px'} src={products.thumbnail} alt=""/></td>
                    <td>{products.price}</td>
                    <td><button className='btn'><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                  </tr>
              ))
            }
          </tbody>
      
        </table>:<p>nothing to display</p>
}
        </div>
      
   
       
  )
}

export default Cart