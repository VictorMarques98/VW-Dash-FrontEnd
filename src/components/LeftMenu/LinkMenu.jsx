import React from 'react';
import { NavLink } from 'react-router-dom';


export default function LinkMenu({ children, path }) {
  return (
    <div className="LinkMenuWrapper">
      <ul className="linkMenuList">
        <NavLink to={path} activeClassName="active">{children}</NavLink>
      </ul>
    </div>
  );
}