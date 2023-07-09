import React, {useEffect, useState} from 'react'
import ListItems from '../components/ListItems'
import AddButton from '../components/AddButton'

const NotesListPage = () => {
  let [notes, setNotes] = useState([])

  useEffect(()=>{
    getNotes()
  },[])

  let getNotes = async () => {
    let response = await fetch('/api/notes/')
    let data = await response.json()
    console.log('DATA:',data)
    setNotes(data)
  }

  return (
    <div>
      <div>
        <div className='mt-10 flex flex-row justify-between mx-5 text-[25px] text-orange-500'>
          <div className='font-bold'>&#9782; Notes </div>
          <div>{notes.length}</div>
        </div>
      </div>
      <div className='mt-10'>
          {notes.map((note,index) => (
            <ListItems  key={index} note={note}/>
          ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesListPage
