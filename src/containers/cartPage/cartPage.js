import React, { useEffect } from "react";
import { Cart, NavbarPage, Sidebar } from "../../components";
import "./cartPage.css";
import DATA from "../vegepage/data";
import { useState } from "react";
import { BiSad } from "react-icons/bi";
import emptycart from "../../assets/emptycart.gif";
import Lottie from "react-lottie";
import animationData from "../../lottie/emptyCart.json";
import { useSelector } from "react-redux";

const CartPage = () => {

  // const cartFilter = (e) => {
  //   if (e !== "clear") {
  //     var inpValue = e.target.value;
  //     let initialSearch = DATA.filter((element) =>
  //       element.name.toLocaleLowerCase().includes(inpValue.toLocaleLowerCase())
  //     );
  //     setCartData(initialSearch);
  //   } else {
  //     var inpValue = "";
  //     let initialSearch = cartData.filter((element) =>
  //       element.name.toLocaleLowerCase().includes(inpValue.toLocaleLowerCase())
  //     );
  //     setCartData(cartData);
  //   }
  // };

  const cartItems = useSelector((state) => state.cart.items);

  const cards = cartItems.map((item,index) => {
    return (
      <Cart
      key={item.id}
      item={{
        index:index,
        id: item.id,
        name: item.name,
        img: item.img,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,}}
      />
    );
  });

  // let result = 0;
  // cartData.forEach((number) => {
  //   result += number.price;
  // });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div cartPage-div">
        <div className="cartPage">
          <NavbarPage
            title="vegetable"
            // cartFilter={cartFilter}
            // clearSearch={() => cartFilter("clear")}
          />
          <h1>Cart</h1>
          <div className="cart-component">
            {cards.length === 0 ? (
              <div className="no-items">
                <Lottie options={defaultOptions} height={400} width={400} />
                {/* <h1>There is nothing to show</h1>
                <BiSad style={{fontSize:'30px', marginTop:'-28px', marginLeft:'8px', color:'#3a7f0d'}} /> */}
              </div>
            ) : (
              
              <>
                <div className="cartPageBox">{cards}</div></>)}
                {/* <div className="bill-board">
                  <div className="cart-container">
                    <h1>Items</h1>
                    <div className="cart-title">
                      <p>Product</p>
                      <p>Weight</p>
                      <p>Price</p>
                    </div>
                    <div className="cart-row">
                      {cartData &&
                        cartData.map((cart, index) => {
                          return (
                            <>
                              <div className="cart-items">
                                <div className="cart-items-name">
                                  <p>{cart.name}</p>
                                </div>
                                <div className="cart-items-name2">
                                  <p>{`${cart.qty}Kg`}</p>
                                </div>
                                <div className="cart-items-name3">
                                  <p>{`${cart.price}Rs`}</p>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                    <div className="cart-title">
                      <p>Total Amount</p>
                      <p>{`${result}Rs`}</p>
                    </div>
                  </div>
                </div> */}
              
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
