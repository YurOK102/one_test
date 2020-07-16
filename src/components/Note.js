import React, { useState } from 'react'



const Note = ({msg, id, handleDel, edit}) => {
  const [value, setValue] = useState(msg)
  return (
    <div className="wrap-cont">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleDel(id)}>delete</button>
    </div>
  );
}

export default Note
