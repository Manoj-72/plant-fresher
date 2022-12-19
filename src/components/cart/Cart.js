import React from "react";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineShareAlt } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import "./Cart.css";

const Cart = (props) => {
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
              <img src={`../../images/${props.img}`} className="cartImg" />
              <div className="cartNameBox">
                <h4>{props.name}</h4>
                <h5>{`$${props.price}`}</h5>
                <div className="cardButtonBox">
                  <div className="cartCounter">
                    <button style={{cursor:'pointer'}} onClick={props.subtract}>-</button>
                    <div className="cartCountText">
                      <p>{props.count}</p>
                    </div>
                    <button style={{cursor:'pointer'}} onClick={props.add}>+</button>
                  </div>
                  <button className="delToCart" onClick={props.deleteCart}>
                    <AiOutlineDelete
                      style={{
                        fontSize: "12",
                        marginRight: "5px",
                        marginBottom: "-2px",
                      }}
                    />
                    {props.delButton}
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
