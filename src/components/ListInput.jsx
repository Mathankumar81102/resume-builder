import { useState } from 'react';
import DeleteIcon from '../assets/delete.png'
import AddIcon from '../assets/add.png'

export default function ListInput({ label, list, handleAddItem, handleRemoveItem, handleInputChange }) {
    
  return (
    <div className="mb-6 mx-10">
      <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      {list.map((item, index) => (
        <div key={index} className="mb-2">
          <label className="flex">
            <input
              className="mr-2 bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`${label} ${index + 1}`}
              type="text"
              name={label}
              value={list[index]}
              onChange={(e) => handleInputChange(e, index)}
            />
            {index !== 0 && (
              <button type="button">
                <img
                  alt="delete"
                  name={label}
                  onClick={() => handleRemoveItem(label, index)}
                  className="w-5"
                  src={DeleteIcon}
                />
              </button>
            )}
          </label>
          <div className="flex justify-center align-center text-lg">
            {index === list.length - 1 && (
              <button type="button" name={label} onClick={(e) => handleAddItem(e)}>
                <img alt="add" name={label} className="w-5 mt-3" src={AddIcon} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}