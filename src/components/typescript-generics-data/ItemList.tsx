import React from 'react'
import Item from './Item';

const ItemList = () => {
    const itemsData = [
      { id: 1, title: 'Item 1', extra: [1, 2, 3] },
      { id: 2, title: 'Item 2', extra: ['a', 'b', 'c'] },
      { id: 3, title: 'Item 3', extra: [{ name: 'Extra 1' }, { name: 'Extra 2' }] },
    ];
  
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Item List</h1>
        {itemsData.map((item) => (
          // Explicitly specifying the type for extra to handle both string[] and number[]
          <Item key={item.id} id={item.id} title={item.title} extra={item.extra as string[]} />
        ))}
      </div>
    );
  };
  
  export default ItemList;