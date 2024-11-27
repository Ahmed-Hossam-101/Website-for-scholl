import React from 'react'

const Link = (props) => {
  return (
<li className="link">
        <a href={props.Location}>
         <span className='TagName'>{props.TagName}</span>
         <span className='Icon'>{props.Icon}</span>
        </a>
    </li>
)
}

export default Link