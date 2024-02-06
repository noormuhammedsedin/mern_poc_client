import React, { useState,useEffect } from 'react'
import BannerCard from '../shared/BannerCard'
import { Link } from 'react-router-dom';
export const Banner = () => {
    const [books, setBooks] = useState([]);
    const [data,setData]=useState([])
    const [value,setValue]=useState('')
    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data =>setBooks(data))
    }, [])
    const serachBook=()=>{
      const filterBook=books.filter((e)=>{
        return e.title==value
       })
       console.log(filterBook)
       setData(filterBook);
    }
    return (
        <div className=' bg-red-100  px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-red-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Buy and sell your books <span className='text-red-700'>for the best prices</span></h1>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                    <div>
                        <input type="search" placeholder='Search a book here' className='w-2/5 py-2 px-2 rounded-s-sm' onChange={(e)=>setValue(e.target.value)} />
                        <button onClick={serachBook} className='bg-red-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                        {data.length>0&&value.length>0 &&<div className='w-2/5 py-2 px-2 bg-white'>  <Link to={`/book/${data[0]._id}`}>{data[0].title}</Link></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
