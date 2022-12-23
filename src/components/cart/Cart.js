import React from "react";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineShareAlt } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./Cart.css";

const Cart = (props) => {
  const dispatch = useDispatch()
  const { name, quantity, img, total, price, id,index } = props.item;

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      name,
      price,
      img,
      quantity,
      total
    }))
  }
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const deleteItemHandler = () => {
    debugger
    dispatch(cartActions.deleteItemFromCart(index))
    console.log(dispatch(cartActions.deleteItemFromCart(index)))
  }

  return (
    <div>
      <div className="cart">
        <div className="cart-content">
          <div>
            <div className="cartCard ">
              {props.share === true && (
                <div className="shareBadge">
                  <AiOutlineShareAlt style={{ fontSize: "22" }} />
                </div>
              )}
              <img src={`../../images/${img}`} className="cartImg" />
              <div className="cartNameBox">
                <h4>{name}</h4>
                <h5>{`$${price}`}</h5>
                <div className="cardButtonBox">
                  <div className="cartCounter">
                    <button style={{cursor:'pointer'}} onClick={removeItemHandler}>-</button>
                    <div className="cartCountText">
                      <p>{quantity}</p>
                    </div>
                    <button style={{cursor:'pointer'}} onClick={addItemHandler}>+</button>
                  </div>
                  <button className="delToCart" onClick={deleteItemHandler}>
                    <AiOutlineDelete
                      style={{
                        fontSize: "12",
                        marginRight: "5px",
                        marginBottom: "-2px",
                      }}
                    />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
