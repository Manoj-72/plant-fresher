import React from 'react'
import { CartContainer, NavbarPage, Sidebar, Vegetable } from '../../components'
import './VegePage.css'
import data from './data'

const VegePage = () => {
  const cards = data.map(item => {
    return (
      <Vegetable 
        key={item.id}
        img={item.coverImg}
        name={item.name}
        price={item.price}
        addButton={item.addButton}
        share={item.share}
        />
    )})
    console.log(cards[1].props.price)
  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div cartPage-div">
      <div className='vegetable'>
      <NavbarPage title='vegetable' />
       <h1>Vegetable</h1>
       <div className='vegetableBox'>
         {cards}
       </div>
       </div>
      </div>
    </div>
  )
}

export default VegePage