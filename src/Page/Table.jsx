import React from 'react'
import img from '../Assets/Imgs/table.jpg';
import '../style/table.css';
import Header from '../layout/Header';
import CopyRight from '../layout/CopyRight';

const Table = () => {
  return (
     <>   <Header />
    <div className='table'>
        <img src={img} alt="" />
    </div>
<CopyRight />
</>
  )
}

export default Table