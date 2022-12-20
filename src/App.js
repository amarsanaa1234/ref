import React, { useState, useEffect, useRef } from "react";



function App() {
  const [name, setName] = useState(''); 
  const inputRef = useRef()
  
  function focus (){
    inputRef.current.focus()
    inputRef.current.value = 'Some value'
  }

  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>my name is {name}</div>
      <button onClick={focus}>Focus</button> 
    </>
  );
}

export default App;
