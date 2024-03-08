'use client'
import React from 'react';
import { PostProps } from '@/types/Postprops.types';

const PostCard = ({ title, body }: PostProps) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 my-4">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
