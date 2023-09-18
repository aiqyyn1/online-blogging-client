import React, { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { postSlice } from '../../store/reducer/PostSlice';
import { fetchPost } from '../../store/reducer/ActionPost';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.PostSlice);
  const [post, setPost] = useState({
    title: '',
    content: '',
  });
  const [img, setImage] = useState<File | string>('');
  console.log(img);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'file') {
      setImage(e.target.files?.[0] || '');
    }
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlePost = async (e: FormEvent) => {
    e.preventDefault();

    if (!img) {
      console.error('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('images', img);
    await dispatch(fetchPost(formData));
  };

  return (
    <div className='flex justify-center items-center  min-h-screen bg-gray-100'>

      <form
        onSubmit={handlePost}
        className=' h-96 p-6 bg-white flex flex-col justify-center items-center '>
          
        <h2 className='text-2xl font-semibold mb-4'>Create Post</h2>
        <div>
          <div>
            <div className='mb-2 text-l font-sans'>Title</div>
            <input placeholder='title' className="border mb-2 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500" name='title' onChange={handleInputChange}></input>
          </div>

          <div className='mb-2 text-l font-sans'>Content</div>
          <input placeholder='content' className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue" name='content'></input>
          <div className='mt-4 text-l font-sans'>Upload Image</div>
          <input className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg" type="file" name='img' onChange={handleInputChange}></input>
          <button
      type="submit"
      className="bg-blue-500 mt-4 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Create Post
    </button>
        </div>
    
      </form>
     
    </div>
  );
};

export default SignIn;
