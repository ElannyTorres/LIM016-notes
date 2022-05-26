import React from 'react';
import '../styles/IconsMenu.css';

import { BiNotepad } from 'react-icons/bi';
import { FiTrash } from 'react-icons/fi';

function IconsMenu() {
  return (
    <div className="icons-container">
      <div className="boton-container selected">
        <BiNotepad className="icon" />
        <span>Notas</span>
      </div>
      <div className="boton-container">
        <FiTrash className="icon" />
        <span>Papelera</span>
      </div>
    </div>
  );
}

export default IconsMenu;
