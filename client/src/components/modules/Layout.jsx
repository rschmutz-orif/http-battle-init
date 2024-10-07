import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (<>
    <header className="flex absolute w-full top-0 left-0 h-12 bg-white border-b border-grey-200 justify-between items-center z-50">
      <div className="logo h-full p-1"><img className="h-full" src="/assets/images/logo.jpg" alt="Orif" /></div>
      <nav>
        <ul className="flex">
          <li className="text-primary p-2">
            <Link to="/">Login !</Link>
          </li>
          <li className="p-2">
            <Link to="/lobby">Lobby</Link>
          </li>
          <li className="p-2">
            <Link to="/games/1">Game</Link>
          </li>
          <li className="p-2">
            <Link to="/404">Nothing Here</Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className="flex pt-12 w-full h-full absolute justify-center items-center z-20">
      <Outlet />
    </div>
  </>
  );
}

export default Layout
