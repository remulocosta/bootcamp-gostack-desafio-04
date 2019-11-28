import React from 'react';

import account_c from '../assets/account_circle.png';
import logo_f from '../assets/logo_f.png';

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <img src={logo_f} />
        <div>
          <span>Meu perfil</span>
          <img src={account_c} />
        </div>
      </div>
    </header>
  );
}

export default Header;
