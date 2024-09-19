import React from 'react'

export const DeleteButton = ({ onclick }) => {
  return (
    <>
        <button className="px-5 py-2 border-red-500 border text-red-500 rounded-xl transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
        onClick={onclick}>
            Supprimer
        </button>
    </>
  )
}
