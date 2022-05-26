import React from 'react';
import '../styles/Note.css';

import { BsTag } from 'react-icons/bs';
import {
  AiOutlineEdit,
  AiOutlineCloseCircle,
  AiOutlineMore,
} from 'react-icons/ai';
import { IoColorPaletteOutline } from 'react-icons/io5';

function Note({ title, texto }) {
  return (
    <div className="note-container">
      <h4>{title}</h4>
      <p>{texto}</p>
      <div className="btns">
        <BsTag className="btn" />
        <AiOutlineEdit className="btn" />
        <AiOutlineCloseCircle className="btn" />
        <IoColorPaletteOutline className="btn" />
        <AiOutlineMore className="btn" />
        {/* Agregar etiqueta - Cambiar fondo - Editar - Eliminar */}
      </div>
    </div>
  );
}

export default Note;
