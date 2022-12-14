import React from 'react'
import { Sidebar } from '../../components'
import { Header } from '../../components'
import './Home.css'

const Homepage = () => {
  return (
    <div className="App">
      <div className="sideBar-div">
        <Sidebar />
      </div>
      <div className="homePage-div">
        <Header />
      </div>
    </div>
  )
}

export default Homepage