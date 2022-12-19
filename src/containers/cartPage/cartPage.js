import React, { useEffect } from "react";
import { Cart, NavbarPage, Sidebar } from "../../components";
import "./cartPage.css";
import DATA from "../vegepage/data";
import { useState } from "react";
import { BiSad } from "react-icons/bi";

const CartPage = () => {
  const [cartData, setCartData] = useState(DATA);

  const add = (index, cart) => {
    cartData[index].qty = cartData[index].qty + 1;
    cartData[index].price = cartData[index].price + cartData[index].initialPrice;
    setCartData([...cartData]);
  };

  const subtract = (index) => {
    if (cartData[index].qty > 1) {
      cartData[index].qty = cartData[index].qty - 1;
      cartData[index].price = cartData[index].price - cartData[index].initialPrice;
    }
    setCartData([...cartData]);
  };

  const deleteCart = (index, cart) => {
    cartData.splice(index, 1);
    setCartData([...cartData]);
  };

  const cartFilter = (e) => {
    if (e !== "clear") {
      var inpValue = e.target.value;
      let initialSearch = DATA.filter((element) =>
        element.name.toLocaleLowerCase().includes(inpValue.toLocaleLowerCase())
      );
      setCartData(initialSearch);
    } else {
      var inpValue = "";
      let initialSearch = cartData.filter((element) =>
        element.name.toLocaleLowerCase().includes(inpValue.toLocaleLowerCase())
      );
      setCartData(cartData);
    }
  };

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

  let result = 0;
  cartData.forEach((number) => {
    result += number.price;
  });

  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div cartPage-div">
        <div className="cartPage">
          <NavbarPage
            title="vegetable"
            cartFilter={cartFilter}
            clearSearch={() => cartFilter("clear")}
          />
          <h1>Cart</h1>
          <div className="cart-component">
            {cartData.length === 0 ? (
              <div className="no-items">
                <h1>
                  There is no item to show
                  <BiSad style={{ marginBottom: "-5px", marginLeft: "10px" }} />
                </h1>
              </div>
            ) : (
              <>
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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;