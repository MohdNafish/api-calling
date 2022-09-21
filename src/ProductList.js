import React,{useState, useEffect, useContext} from "react";
import getData from "./useApi";
import { Link } from 'react-router-dom'
import { createContext } from "react";
import { Cart } from './Context'

export const CartContext = createContext();

const ProductList = () => {

  const { cart, setCart } = useContext(Cart);
  console.log(cart)

  const [loading, setLoading] = useState(true)
  const [productData, setProductData] = useState([]);
  const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
     const getUserData =  async ()=>{
      const baseData = await getData(url);

        if(baseData){
          setLoading(false)
          setProductData(baseData)
        }
     };
     getUserData()

    }, []);

    // console.log(productData, "data is loaded")

    // const [cart, setCart] = useState([]);
    // console.log(cart);

      return (
        <>
        {
          !loading ? 
          <div style={{padding: '20px'}}>
            <h2 style={{textAlign: 'center'}}>Data fetched successfully.</h2>
            {/* {JSON.stringify(data)} */}
          <div className="container">
            <div className="row" style={{display: "flex", flexWrap: "wrap"}}>
                {
                    productData && productData.length ? 
                    productData.map((productItem, i) => (
                        <div className="col-md-4">
                            <div className="product-item">
                              <div className="product-image">
                                <img src={productItem.image} style={{width: "100%"}} />
                                </div>
                                <h6 className="product-title">{productItem.title}</h6>
                                <p>{productItem.price}</p>
                                {cart.includes(productItem) ? (
                                  <button onClick={()=> setCart(cart.filter((c)=> c.id !== productItem.id))} id={cart.filter((c)=> c.id !== productItem.id)} className="btn btn-secondary">Remove from cart</button>
                                ) : 
                                <button onClick={()=> setCart([...cart, productItem])} className="btn btn-secondary" id={productItem.id}>Add to cart</button>
                                }
                            </div>
                        </div>
                    )) : 
                    <div>
                        Data not found.
                    </div>
                }
            </div>
          </div>
          </div>
          : "Loading..."
        }
        </>
  );
}

export default ProductList;