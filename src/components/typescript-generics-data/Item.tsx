'use client'

import React from 'react'

type ItemProps<T> = {
    id: number;
    title: string;
    extra: T[];
  };
  
  const Item = <T,>({ id, title, extra }: ItemProps<T>) => {
    return (
      <div className="border p-4 mb-4">
        <p className="font-bold text-lg">ID: {id}</p>
        <p className="text-base">Title: {title}</p>
        <div className="mt-2">
          <p className="text-sm font-semibold">Extras:</p>
          <ul className="list-disc list-inside">
            {extra.map((item, index) => (
              <li key={index}>{JSON.stringify(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  export default Item;
