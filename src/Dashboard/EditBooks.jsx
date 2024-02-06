import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const {title, author,imageUrl, category, bookDescription,bookPdfUrl  } = useLoaderData();
  console.log(title)

  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookcategory, setSelectedBookcategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookcategory(event.target.value);
  };


  const  handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form)
    const title = form?.title?.value;
    const author= form?.author?.value;
    const imageUrl = form?.imageUrl?.value;
    const category = form?.category?.value;
    const bookDescription = form?.bookDescription?.value;
    const bookPdfUrl=form?.bookPdfUrl?.value;
    const bookObj = {
      title,
      author,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl  ,
    };
    console.log(bookObj)

    // update the book object
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PUT",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Updated successfully!!")
      });
  };
  
    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Upload A Book!</h2>
        <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>

          {/* first row */}
          <div className='flex gap-8'>

            {/* book name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="title"
                  value="Book Title"
                />
              </div>
              <TextInput
                id="title"
                placeholder="Book Name"
                required
                type="text"
                name='title'
                className='w-full'
                defaultValue={title}
              />
            </div>

            {/* author name */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="author"
                  value="Author Name"
                />
              </div>
              <TextInput
                id="author"
                placeholder="Author Name"
                required
                type="text"
                name='author'
                className='w-full'
                defaultValue={author}
              />
            </div>

          </div>

          {/* 2nd Row */}
          <div className='flex gap-8'>
            {/* book url */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="imageUrl"
                  value="Book Image URL"
                />
              </div>
              <TextInput
                id="imageUrl"
                placeholder="Image URL"
                required
                type="text"
                name='imageUrl'
                className='w-full'
                defaultValue={imageUrl}
              />
            </div>

            {/* book category */}
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label
                  htmlFor="inputState"
                  value="Book category"
                />
              </div>
              <Select
                id="inputState"
                name="category"
                className="w-full rounded"
                value={selectedBookcategory}
                onChange={handleChangeSelectedValue}
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>

          </div>

          {/* full width div for book description */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="bookDescription"
                value="Book Description"
              />
            </div>
            <Textarea
              id="bookDescription"
              placeholder="Book Description"
              required
              type="text"
              name='bookDescription'
              className='w-full'
              rows={4}
              defaultValue={bookDescription}
            />
          </div>


          {/* book pdf url */}
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="bookPdfUrl"
                value="Book PDF Link"
              />
            </div>
            <TextInput
              id="bookPdfUrl"
              placeholder="Paste Book PDF URL here"
              required
              type="text"
              name='bookPdfUrl'
              className='w-full'
              defaultValue={bookPdfUrl}
            />
          </div>


          {/* Submit btn */}
          <Button type="submit" className='mt-5'>
            Upload book
          </Button>

        </form>
      </div>
    )
  }

export default EditBooks