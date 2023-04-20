import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      content
      user {
        id
        name
      }
    }
  }
`;

type Post = {
  id: string;
  content: string;
  user: any;
};

const Posts: React.FC = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div className="flex flex-col items-center">
      {data.posts.map((post: Post, index: number) => {
        return (
          <div className="bg-black p-3 m-3 border rounded w-[90%]" key={index}>
            <h2 className="text-orange-400 text-lg">{post.user.name}</h2>
            <p className="text-white">{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
