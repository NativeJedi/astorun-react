import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './app-nav-menu.styles.scss';
import { Menu as MenuIcon, MenuOpen as MenuOpenIcon } from '@material-ui/icons';

interface INavMenuProps {
  children: React.ReactFragment;
}

const AppNavMenu = ({ children }: INavMenuProps): React.ReactElement => {
  const [isOpened, toggleMenu] = useState<boolean>(false);

  return (
    <div className="app-nav-menu">
      <div className={`app-nav-menu__wrapper ${isOpened ? 'is-opened' : ''}`}>
        {children}
      </div>

      <Button
        color="primary"
        variant="outlined"
        classes={{ root: 'app-nav-menu__btn' }}
        onClick={() => toggleMenu(!isOpened)}
      >
        {isOpened ? <MenuOpenIcon /> : <MenuIcon />}
      </Button>
    </div>
  );
};

export default AppNavMenu;
