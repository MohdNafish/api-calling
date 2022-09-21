import React from 'react'
import ProductList from '../ProductList'
import { useState, useEffect, useContext } from 'react'
import { Cart } from '../Context'

export const Checkout = () => {

  const [total, setTotal] = useState()

  const { cart } = useContext(Cart);

  useEffect(()=> {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, []);

  return (
    <>
        <div className='container my-4'>
          <div className='row'>
            <div className='col-md-8'>
            {
              cart.map((prod)=>(
                <div className="product-item">
                  <div className="product-image">
                    <img src={prod.image} style={{width: "100%"}} />
                    </div>
                    <h6 className="product-title">{prod.title}</h6>
                    <p>{prod.price}</p>
                    {/* {cart.includes(productItem) ? (
                      <button onClick={()=> setCart(cart.filter((c)=> c.id !== productItem.id))} className="btn btn-secondary" >Remove from cart</button>
                    ) : 
                    <button onClick={()=> setCart([...cart, productItem])} className="btn btn-secondary" >Add to cart</button>
                    } */}
                </div>
              ))
            }
              
            </div>
            <div className='col-md-4'>
              <div>
                <h4>Total Cart Price {total}</h4>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
