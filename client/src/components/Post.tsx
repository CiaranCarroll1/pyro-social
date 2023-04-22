import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../mutations/postMutations';
import { GET_POSTS } from '../queries/postQueries';
import { AiFillDelete } from 'react-icons/ai';

interface Props {
  post: Post;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: { id: post.id },
    refetchQueries: [{ query: GET_POSTS }],
  });

  return (
    <>
      <div className="bg-black p-3 m-3 border rounded w-[90%]">
        <h2 className="text-orange-400 text-lg">{post.user.name}</h2>
        <p className="text-white">{post.content}</p>
        <button
          onClick={() => deletePost()}
          className="bg-orange-500 p-2 rounded"
        >
          <AiFillDelete />
        </button>
      </div>
    </>
  );
};

export default Post;
