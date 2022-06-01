import React from 'react';
import '../styles/CreateNote.css';

import { AiOutlinePlus } from 'react-icons/ai';

function CreateNote() {
  return (
    <>
      <input className="createInput" type="button" value="Crear Nota" />
      <AiOutlinePlus id="plusIcon" />
    </>
    );
}

export default CreateNote;