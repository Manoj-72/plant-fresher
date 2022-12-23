import React, { useState } from "react";
import "./Vegetable.css";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineShareAlt } from "react-icons/ai";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";

const Vegetable = (props) => {
  const dispatch = useDispatch();
   

  const { name, price, id, img, quantity, addButton, delButton, share} = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        img,
        price,
      })
    );
    toast("Added to cart",{type:'success'});
    };
    const addItemHandler = () => {
      dispatch(cartActions.addItemToCart({
        id,
        name,
        price,
        img,
        quantity,
      }))
    }
    const removeItemHandler = () => {
      dispatch(cartActions.removeItemFromCart(id))
    }
    console.log('test', cartActions.addItemToCart(props))
  
  return (
    <>
    <div className="vegetableCard ">
      {share === true && (
        <div className="shareBadge">
          <AiOutlineShareAlt style={{ fontSize: "22" }} />
        </div>
      )}
      <img src={`../../images/${img}`} className="vegetableImg" />
      <div className="cardNameBox">
        <h4>{name}</h4>
        <h5>{`$${price}`}</h5>
        <div className="cardButtonBox">
          {/* <div className="vegetableCounter">
            <button onClick={removeItemHandler}>-</button>
            <div className="vegetableCountText">
              <p>{quantity}</p>
            </div>
            <button onClick={addItemHandler}>+</button>
          </div> */}
          <button className="addToCart" onClick={addToCartHandler}>
            ADD
          </button>
        </div>
      </div>
    </div>
    <ToastContainer
    position="bottom-left"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    theme="light"
    />
    </>
  );
};

export default Vegetable;
