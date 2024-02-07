import React, { useContext, useEffect, useState } from 'react'
import { Card, Spinner } from 'flowbite-react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
export default function Shop() {
  const {loading } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
// fetching data
  useEffect(() =>{
    fetch('https://mern-poc-back.onrender.com/all-books')
    .then(res => res.json())
    .then(data => setBooks(data))
  }, [loading]);

    // loader
    if (loading) {
      return <div className="text-center mt-28">
          <Spinner aria-label="Center-aligned spinner example" />
      </div>
  }


  return (
    <div className='my-28 px-4 lg:px-24'>
      <h2 className='text-3xl font-bold text-center mb-16 z-40'>All Books are Available Here</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          {
            books.map(book => <Card>
              <img src={book.imageUrl} alt="" className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.title}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order....
                </p>
              </p>

              <button className='px-4 py-2 bg-red-600 text-white rounded'> <Link to={`/book/${book._id}`}>Buy Now</Link></button>
            </Card>)
          }
        </div>
    </div>
  )
}
