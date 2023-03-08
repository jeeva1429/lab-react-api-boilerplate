import React,{useEffect, useState} from 'react'
import axios from 'axios'
import BookList from './BookList'
function FetchComponent() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then((res) => {setBooks(res.data.books)
                                 console.log(res.data.books)})
        .catch((error) => {console.error('Status Code: 404')
                           console.error('Website not found') })
    }, [])
  return (
    <div>
        <BookList books={books}/>
    </div>
  )
}

export default FetchComponent