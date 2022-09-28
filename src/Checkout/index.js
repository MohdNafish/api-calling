import React from 'react'
import ProductList from '../ProductList'
import { useState, useEffect, useContext } from 'react'
import { Cart } from '../Context'

export const Checkout = () => {

  const [total, setTotal] = useState()

  const { cart, setCart } = useContext(Cart);

  const [quantity, setQuantity] = useState(1);

	const updateQuantity = (id, value) => {
    cart.map((item) => item.id !== id) &&
			setQuantity((prevState) => prevState + value);
	};

  useEffect(()=> {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
        <div className='container my-4'>
          <div className='row'>
            <div className='col-md-8'>
            {
              cart.map((prod, i)=>(
                <div className="product-item cart d-flex align-items-center justify-content-between">
                  <div className="product-image h-auto">
                    <img src={prod.image} style={{width: "100%"}} />
                    </div>
                    <h6 className="product-title h-auto mb-0">{prod.title}</h6>
                    
                    <button onClick={() => updateQuantity(cart.filter((c)=> c.id !== prod.id), -1)}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => updateQuantity(cart.filter((c)=> c.id !== prod.id), 1)}>+</button>

                    <p className='mb-0'>{prod.price*quantity}</p>
                    <button onClick={()=> setCart(cart.filter((c)=> c.id !== prod.id))} className="btn btn-danger">Remove from cart</button>
                </div>
              ))
            }
            </div>
            <div className='col-md-4'>
              <div>
                <h4>Total Cart Price {(total*quantity).toFixed(2)}</h4>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
