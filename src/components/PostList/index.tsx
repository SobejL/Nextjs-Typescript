'use client'
import React from 'react'
import { PostProps } from '@/types/Postprops.types';
import PostCard from '../PostCard';

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }


const PostList = async () => {

    const data: PostProps[] = await getData();

  return (
        <div className="postList">

      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

      
    </div>
  )
}

export default PostList