import React from 'react'
import '../css/BooKList.css'
function BookList(props) {
  return (
    <div id='main'>
        {props.books.map((el) => (
            <div key={el.id}>
                 <p id={'title'}>{el.title}</p>
                 <div id='image-description'>
                    <img src={el.imageLinks.thumbnail}/>
                    <p>{el.description}</p>
                 </div>
                 <h1>{el.authors}</h1>
                 <hr/>
            </div>
        ))}
       
    </div>
  )
}

export default BookList