import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Note from "./Note";

const Admin = () => {
  const [loggedIn, ] = useState(false);
  
  // массив добавленных задач
  const [notes, setNotes] = useState([
    { id: 1, message: "contact_1" },
    { id: 2, message: "contact_2" },
  ]);

  // содержится вводимый текст в инпуте
  const [input, setInput] = useState('');
  const [search, setSearch] = useState(input)
  
  // функция которая добавляет новый элемент в массив задач
  const handleClick = () => {    
    if(input !== ''){
      setNotes([...notes, {
        id: Date.now(),
        message: input
      }]);
      setInput('');
    }
  };

  // функция которая удаляет элемент из массив задач
  const del = (a, notes, setNotes) => {
    setNotes(notes.filter(i => i.id !== a));
  };

  const removeItem = () => {
    localStorage.removeItem("token");
  }


  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="wrapper">
      <Link to="/" onClick={removeItem}>
        Logout
      </Link>
      <div className="top">
        <label className="label-inp">Поиск</label>
        <input
          className="field"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label className="label-inp">Добавить контакт</label>
        <input
          className="field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="field-btn" onClick={(e) => handleClick()}>
          click
        </button>
      </div>

      {notes
        .filter(
          (shop) =>
            shop.message.toLowerCase().indexOf(search.toLowerCase()) > -1
        )
        .map((item) => (
          <Note
            key={item.id}
            msg={item.message}
            id={item.id}
            handleDel={(a) => del(a, notes, setNotes)}
          />
        ))}
    </div>
  );
  
}

export default Admin
