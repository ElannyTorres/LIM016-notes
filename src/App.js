import './App.css';

import LogoIcon from './img/Logo.png';
import IconsMenu from './components/IconsMenu';
import Note from './shared/Note';

import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import ProfileDefault from './img/blank-profile-picture.png';
/* import Signup from './components/Signup'; */

function App() {
  return (
    <div className="App">
      <header>
        <button className="menu">
          <AiOutlineMenu />
        </button>
        <div className="logo">
          <img src={LogoIcon} alt="MyNotes-LogoIcon" />
          <h4>MyNotes</h4>
        </div>
        <div className="search-bar">
          <AiOutlineSearch id="searchicon" />
          <input type="text" placeholder="Buscar..." />
          <AiOutlineClose />
        </div>
        <div className="profile">
          <img src={ProfileDefault} alt="" />
        </div>
      </header>
      <div className="body-container">
        <div className="icons-menu">
          <IconsMenu />
        </div>
        <div className="notes-container">
          <Note
            title="Nota 1"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate fugiat impedit quae amet ea odio consectetur dicta dolore. Ad fugit consequatur minima. Suscipit ea adipisci ipsam rem, architecto ex?"
          />
          <Note
            title="Nota 1"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate fugiat impedit quae amet ea odio consectetur dicta dolore. Ad fugit consequatur minima. Suscipit ea adipisci ipsam rem, architecto ex?"
          />
          <Note
            title="Nota 1"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate fugiat impedit quae amet ea odio consectetur dicta dolore. Ad fugit consequatur minima. Suscipit ea adipisci ipsam rem, architecto ex?"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
