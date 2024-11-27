import React from 'react'
import '../style/CompetitionContainer.css'
import Addperson from '../Assets/svg/Addperson'
const CompetionContainr = ({img,name,describtion}) => {
  let vibrate=e =>{
    window.navigator.vibrate(200)
  }
  return (
    <div className="Ccontainer">
    <div className="img">
      <img src={img} alt="img" />
      </div>
      <div className="nameOfCompetition">{name}</div>
      <div className="describtion">
        <p>
         {describtion}
        </p>
      </div>
      <button className="Jionbtn" onClick={vibrate}>
        انضمام 
        <span>
          <Addperson width="23px"/>
        </span>
      </button>
  </div>  )
}

export default CompetionContainr