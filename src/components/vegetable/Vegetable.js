import React,{useState} from 'react'
import './Vegetable.css'
import {BsCart4} from 'react-icons/bs'
import {AiOutlineShareAlt} from 'react-icons/ai'

const Vegetable = (props) => {
  const [count, setCount] = useState(0);

    // function add() {
    //     setCount(function(oldValue) {
    //         return oldValue + 1
    //     })
    // }
    const add = () =>{
      setCount(count + 1)
    }

    function subtract() {
      if(count > 0){
        setCount(count - 1)
    }
   }
   
   const highLigtht = () => {
   if(props.name === 'brokoli') {
    return 
   }
  }

    // let badge
    // if () {
    //     badge = 
    // }

  return (
        <div className='vegetableCard '>
          {props.share === true && <div className='shareBadge'><AiOutlineShareAlt style={{fontSize:'22'}} /></div> }
          <img src={`../../images/${props.img}`} className='vegetableImg'/>
          <div className='cardNameBox'>
            <h4>{props.name}</h4>
            <h5>{`$${props.price}`}</h5>
            <div className='cardButtonBox'>
              <div className='vegetableCounter'>
                <button onClick={subtract}>-</button>
                <div className='vegetableCountText'>
                <p>{count}</p>
                </div>
                <button onClick={add}>+</button>
              </div>
              <button className='addToCart'><BsCart4 style={{fontSize:'12', marginRight:'5px'}} />{props.addButton}</button>
            </div>
          </div>
        </div>
  )
}

export default Vegetable