import {React,useState} from 'react'
import img from '../Assets/Imgs/load.gif'
import CopyRight from './CopyRight'
const Load = () => {
    const [Time, setTime] = useState(true)
    setTimeout(e =>{
        setTime(false)
    },2000)
    window.addEventListener('contextmenu',e =>{e.preventDefault()})
  return (
<>
{Time ? (
  <div className="load">
<CopyRight />
<img src={img} alt="load" />

</div>) : ''}

</>
)
}

export default Load
   
