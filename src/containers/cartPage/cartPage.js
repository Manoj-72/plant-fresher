import React, { useEffect } from "react";
import { Cart, NavbarPage, Sidebar } from "../../components";
import "./cartPage.css";
import DATA from "../vegepage/data";
import { useState } from "react";

const CartPage = () => {
  const [cartData, setCartData] = useState(DATA);
  // const [billData, setBillData] = useState();

  const add = (index, cart) => {
    cartData[index].qty = cartData[index].qty + 1;
    cartData[index].price = cartData[index].price + cartData[index].initialPrice;
    setCartData([...cartData]);
  };


  const subtract = (index) => {
    cartData[index].qty = cartData[index].qty - 1;
    cartData[index].price = cartData[index].price - cartData[index].initialPrice;
    setCartData([...cartData]);
  };

  const deleteCart = (index, cart) => {
    cartData.splice(index, 1);
  }
 
  const cards = cartData.map((cart, index) => {
    return (
      <Cart
        key={cart.id}
        img={cart.coverImg}
        name={cart.name}
        price={cart.price}
        delButton={cart.delButton}
        share={cart.share}
        count={cart.qty}
        add={() => add(index, cart)}
        subtract={() => subtract(index)}
        deleteCart={() => deleteCart(index, cart)}
      />
    );
  });

  // const billing = billData?.map((cart, index) =>{
  //               <>
  //               <div className="cart-items">
  //                 <p>Carrot</p>
  //                 <p>1kg</p>
  //                 <p>{cart.price}</p>
  //               </div>
                
  //               <div className="cartBuy-btn">
  //                 <button>Buy</button>
  //               </div>
  //               </>
  // })
  
  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div cartPage-div">
        <div className="cartPage">
          <NavbarPage title="vegetable" />
          <h1>Cart</h1>
          <div className="cart-component">
            <div className="cartPageBox">{cards}</div>
            <div className="bill-board">
            <div className="cart-container">
                <h1>Items</h1>
                <div className="cart-title">
                  <p>Product</p>
                  <p>Weight</p>
                  <p>Price</p>
                </div>
                <div className="cart-row">
              {cartData && cartData.map((cart,index)=>{
                return (
                   <>
                    <div className="cart-items">
                      <div className="cart-items-name"><p>{cart.name}</p></div>
                      <div className="cart-items-name2"><p>{`${cart.qty}Kg`}</p></div>
                      <div className="cart-items-name3"><p>{`${cart.price}Rs`}</p></div>
                    </div>
                   </>
                )
              }) 
              }
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
