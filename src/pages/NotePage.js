import React,{useEffect, useState} from 'react'
import { useParams, Link } from "react-router-dom";

const NotePage = () => {
    let noteId = useParams().id
    let [note,setNote] = useState(null)

    useEffect(()=>{
        let getNote = async()=>{
            if (noteId === 'new') return
            let response = await fetch(`https://notesapp-api-hp8j.onrender.com/api/notes/${noteId}`)
            let data = await response.json()
            setNote(data)
        }
        getNote()
    },[noteId])


    let updateNote = async()=>{
        fetch(`https://notesapp-api-hp8j.onrender.com/api/notes/${noteId}/update/`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    let createNote = async()=>{
        fetch(`https://notesapp-api-hp8j.onrender.com/api/notes/create/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    let deleteNote = async()=>{
        fetch(`https://notesapp-api-hp8j.onrender.com/api/notes/${noteId}/delete/`,{
            method:'DELETE',
            'headers':{
                'Content-Type':'application/json'
            }
        })
    }

    let handleSubmit=()=>{
        if(noteId !== 'new' && note.body===''){
            deleteNote()
        }
        else if(noteId!=='new'){
            updateNote()
        }else if(noteId === 'new' && note!==null){
            createNote()
        }
    }
    return (
    <div>
        <div className='flex flex-row justify-between mb-10'>
                <div>
                    <Link to='/' onClick={handleSubmit}><button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full text-[20px]'>Back</button></Link>
                </div>
                <div>
                    {noteId !== 'new'? (
                        <Link to='/'><button onClick={deleteNote} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full text-[20px]'>Delete</button></Link>
                    ):(
                        <Link to='/'><button onClick={handleSubmit} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full text-[20px]'>Done</button></Link>
                    )
                    }
                </div>
            </div>
        <textarea class='bg-gray-800 text-slate-400 border-transparent text-[20px] px-5 py-5 w-full h-96 resize-none focus:outline-0' onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}></textarea>
    </div>
    )
}

export default NotePage
