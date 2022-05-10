import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
        <div 
            className="journal__entry-picture"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://i.pinimg.com/564x/9b/80/25/9b802545eaa5d7e7353cad8c6551f9ff.jpg)'
            }}
        >

        </div>

        <div className="journal__entry-body">
            <p className="journal__entry-title">
                A new day
            </p>
            <p className="journal__entry-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit animi numquam neque harum velit cumque praesentium eveniet, asperiores laboriosam alias.
            </p>
        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>31</h4>
        </div>
    </div>
  )
}
