import React from 'react';
import LinkMenu from './LinkMenu';

function LeftMenu () {
  return(
    <div className="leftMenuWrapper">
      <ul className="leftMenuList">
        <li className="">
          <LinkMenu path="/dashboard">Dashboard</LinkMenu>
        </li>
      </ul>

    </div>
  )
};

export default LeftMenu;
