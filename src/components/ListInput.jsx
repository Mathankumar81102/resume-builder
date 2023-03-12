import { useState } from 'react';
import DeleteIcon from '../assets/delete.png'
import AddIcon from '../assets/add.png'

export default function ListInput({ label, list, handleAddItem, handleRemoveItem, handleInputChange }) {
  const toTitleCase = (word) => {
    return word.replace(/([A-Z])/g, function (match) {
      return " " + match;
    }).replace(/^./, function (match) {
      return match.toUpperCase();
    })
  }
  return (
    <div className="mb-6 mx-10">
      <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor={label}>
        {toTitleCase(label)}
      </label>
      {list.map((item, index) => (
        <div key={index} className="mb-2">
          <label className="flex">
            <input
              className="mr-2 bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={(label!=="toolsAndTechnologies")?`${toTitleCase(label)} ${index + 1}`:(index===0)?"Add the tools or technologies e.g Front-end : ReactJS , Database : SQL ":"Add the tools or technologies e.g Back-end : NodeJS , Libraries : Redux " }
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
          <div className="flex mt-7  justify-center align-center " name={label}>
            {index === list.length - 1 && (
              <button type="button" className='bg-teal-100 p-2 rounded-2xl space-x-2 flex justify-center items-center ' name={label} onClick={(e) => handleAddItem(e)}>
               
               <img alt="add" name={label} className="w-5 " src={AddIcon} onClick={(e) => handleAddItem(e)}/>
               {/* <h1 name={label} onClick={(e) => handleAddItem(e)}>Add {toTitleCase(label)}</h1>  */}
               
              </button>
            )}

          </div>
          {index === list.length - 1 && <hr className='mt-6 border-[1px]'/>}        
        </div>

      ))}

    </div>
  );
}