import React from 'react';

import iconFacebook from '../assets/icon-facebook.png';

function Header() {
  return (
    <header>
      <nav>
        <img src={iconFacebook} />
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;