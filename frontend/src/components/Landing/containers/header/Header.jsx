import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="gpt3__header section__padding " id="home">

      <div className="gpt3__header-content">
        <h1 className="gpt3__header-content__text ">
            Verify and Onboard Employees<br></br> Quickly !!
        </h1>
        <p>
          Fast, Reliable and Quick verification for employees
        </p>
        <div onClick={navigate('/login')}className="gpt3__header-content__input" >
          {/* <input type="email" placeholder='Your Email Address'></input> */}
          <button type="button"  >Join us now -> </button>
        </div>

      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt='ai image'></img>
      </div>
    </div>
  )
}

export default Header