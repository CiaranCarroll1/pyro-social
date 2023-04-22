import React from 'react';
import Loading from './Loading';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries/postQueries';
import PostForm from './PostForm';
import Post from './Post';

const Posts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <Loading />;
  if (error)
    return <p className="flex flex-col items-center">Something went wrong</p>;
  return (
    <div className="flex flex-col items-center">
      <PostForm />
      {data.posts.map((post: Post, index: number) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default Posts;
