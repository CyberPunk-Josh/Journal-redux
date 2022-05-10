import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar/>

      <div className="notes__content">
        <input 
          type="text"
          placeholder='title'
          className="notes__title-input" 
        />
        <textarea
          placeholder='What happened today'
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
           src="https://i.pinimg.com/564x/52/17/05/5217054fb4ef744e48c6195b075193b2.jpg" 
           alt=""
          />
        </div>
      </div>
    </div>
  )
}
