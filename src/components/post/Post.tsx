import React, {
  ChangeEvent,
  FormEvent,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import Input from '../input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { fetchPost } from '../../store/reducer/ActionPost';
import { postApi } from '../../service/UserService';
import { useHandlePostDataMutation } from '../../service/UserService';
const Post = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.PostSlice);
  const [handlePostData, { data, isLoading, error }] =
    useHandlePostDataMutation();
  console.log(error);
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const [img, setImage] = useState<File | string>('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = e as ChangeEvent<HTMLInputElement>;

    if (e.target.type === 'file') {
      setImage(target.files?.[0] || '');
    }
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handlePost = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!img) {
        console.error('Please select a file.');
        return;
      }

      const formData = new FormData();
      formData.append('title', post.title);
      formData.append('content', post.content);
      formData.append('images', img);
      await handlePostData(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <div className='fixed inset-0  flex items-center justify-center z-50'>
          <div className='fixed inset-0  bg-black opacity-50'></div>
          <div className='bg-white  p-6 rounded-lg shadow-lg z-10 w-10/12 sm:w-1/3 max-h-96'>
            <h2 className='text-xl font-semibold mb-4'>What's happening today?</h2>
            <hr className='border-b mb-4' />
            <div className='text-gray-700'>
              <input
                name='title'
                onChange={handleInputChange}
                placeholder='Title'
                className='border-b border-gray-300 focus:border-cyan-500 outline-none mb-4 w-full'
              />
              <textarea
                className='border w-96 h-20 border-gray-300 rounded-md p-2 focus:ring focus:ring-cyan-500 focus:border-cyan-500 h-40 resize-none outline-none bg-transparent'
                placeholder='Content'
                name='content'
                onChange={handleInputChange}></textarea>
            </div>
            <input
              type='file'
              name='img'
              onChange={handleInputChange}
              className='mt-4 rounded-md px-4 h-10 cursor-pointer bg-white border border-gray-300 shadow-sm transition-bg duration-200'
            />
  
            <div className="mt-6">
              <button className='px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600'>
                Create Post
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Post;
