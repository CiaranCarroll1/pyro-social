import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../mutations/postMutations';
import { GET_POSTS } from '../queries/postQueries';

const userId = '6441042de38e5e648dad0e3e';

const PostForm: React.FC = () => {
  const [addPost] = useMutation(ADD_POST);
  const [content, setContent] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    addPost({
      variables: { content, userId },
      refetchQueries: [{ query: GET_POSTS }],
    });
    setContent('');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className=" p-3 m-3 bg-black w-[90%] rounded"
      >
        <textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-2 py-1 border rounded min-h-[80px]"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-lg rounded px-3 py-1"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
