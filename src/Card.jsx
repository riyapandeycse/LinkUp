import React from 'react'

// understanding cards and childerens
export default function Card({children}) {
  return (
    <div style={{ 
        backgroundColor :'pink' ,
        borderRadius : '5px',
        border:'2 1px solid #4019FF',
        padding : '20px',
        margin:'10px',
        boxShadow:'2px 2px 5px rgba(0,0,0,0.1)'

        }}>
      {children}
    </div>
  )
}
