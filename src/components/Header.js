import React from "react";
import { Route, Link, Routes } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo" />
      <Routes>
        <Route path="/sign-in" element={
          <Link to="/sign-up" className="header__link">Регистрация</Link>
        } />
        <Route path="/sign-up" element={
          <Link to="/sign-in" className="header__link">Войти</Link>
        } />
        <Route path="/" element={
          <div className="header__user-container">
            <p className="header__user-email">{props.email}</p>
            <Link to="/sign-in" className="header__link" onClick={props.signOut}>Выйти</Link>
          </div>
        } />
      </Routes>
    </header>
  );
}

export default Header;