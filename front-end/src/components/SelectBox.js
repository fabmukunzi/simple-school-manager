import React from 'react';

const SelectBox = (props) => {
  return (
    <div className='w-3/12'>
      <label
        htmlFor={props?.label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props?.label}
      </label>
      <select
        id={props?.label}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => props?.onchange(e.target.value)}
        disabled={props.disabled}
      >
        <option value={props.title}>{props.title}</option>
        {props?.options?.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
