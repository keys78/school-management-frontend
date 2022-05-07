import React, { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor () {
  const [value, setValue] = useState('');

useEffect(() => {
    localStorage.setItem('text', JSON.stringify(value));
  }, [value]);


  return (
      <>
    <ReactQuill placeholder="Hi Admin, Make your notes here" theme="snow" value={value} onChange={setValue}/>
    </>
  );
}

export default TextEditor;