import React from 'react'

const SearchResults = ({inputedText}) => {
    let lists =[
        {name:"التواصل"},
        {name:"الفصول"},
        {name:"جدول الحصص",location:'/Table'},
        {name:"حاله الطالب"},
        ,{name:"المسابقات",
          location:'/Competitons'},
        {name:"نتيجة الثانوية العامة",
          location:'/UserStatus'}
        
    ];
    
  return (
    <nav className='ResultBox'>
        <ul id='resluts'>
        {
        lists.map(e => {
            if (e.name.includes(inputedText)) {
              return(
                <a href={e.location} key={e.name}>
                   <li >{e.name}</li>
                </a>
              );
            }
            return null; 
          })
          
        }
        </ul>
    </nav>
  )
}

export default SearchResults