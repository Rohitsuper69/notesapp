import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <div className='flex flex-row-reverse mr-5 mt-16'>
        <Link to='/note/new'>
            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full text-[20px]'>New</button>
        </Link>
    </div>
  )
}

export default AddButton
