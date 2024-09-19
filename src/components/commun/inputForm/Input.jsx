import React from 'react'

const Input = ({nameAndId, type, label, placeholder, value, setValue}) => {
  return (
    <>
        <label htmlFor={nameAndId} className="block mb-2 md:text-xl  text-lg font-medium text-gray-900 ">{label}</label>
        <input 
            type={type} 
            name={nameAndId} 
            id={nameAndId} 
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-1 focus:outline-none  focus:ring-blue-600 focus:border-blue-600 block w-full px-2 py-1 h-10 md:text-lg text-base"
            placeholder={placeholder}
            value={value}
            onChange={setValue}
            />
    </>
  )
}

export default Input
