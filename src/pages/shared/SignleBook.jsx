import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';
import Store from "../../payment/OrderPayment";

const SignleBook = () => {
    const data = useLoaderData();
    const { title,imageUrl,bookDescription,author,bookPdfUrl} = data;
    console.log(data)
    return (
        <div className='mt-20'>
            <Banner>
                <div className=" z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-2xl font-normal text-black">
                            <MdAnnouncement className='me-2 text-red-600' />
                            <span className='text-4xl font-semibold'>Book Name: {title}</span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>

            {/* book details */}
            <div className='mt-20 flex justify-between'>
                <div className='ml-20 mt-20 mr-20'><img src={imageUrl} alt='loading'/></div>
                <div className='ml-20 mt-20 mr-20'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <p ><span className='font-semibold'>Description-</span>{bookDescription}</p>
                    <p className='font-semibold'>Author-{author}</p>
                    <Store title={title} bookPdfUrl={bookPdfUrl} imageUrl={imageUrl}/>
                </div>
            </div>
        </div>
    )
}

export default SignleBook