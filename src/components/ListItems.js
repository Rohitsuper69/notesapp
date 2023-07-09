import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) =>{
    return new Date(note.updated).toLocaleDateString()
}


let getTitle = (note)=>{
  let title = note.body.split('\n')[0]
  if(title.length >45){
      return title.slice(0,45)
  }
  return title
}

let getContent = (note) =>{
  let title = getTitle(note)
  let content = note.body.replaceAll('\n','')

  if(content.length >45){
      return content.slice(0,45) + '...'
  }else{
    return content
  }
}

const ListItem = ({note}) => {

  

  return (
    <div className='flex flex-col border border-slate-800 text-slate-400'>
        <Link to={`/note/${note.id}`}>
            <div className='flex flex-row justify-between ml-5 mr-5 my-5'>
                <div className='text-[20px]'>{getTitle(note)}</div>
                <div className=''>{getTime(note)}</div>
            </div>
            <div className='flex flex-row ml-5 mb-5'>{getContent(note)}</div>

        </Link>
    </div>
  )
}

export default ListItem
