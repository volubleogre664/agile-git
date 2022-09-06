"use strict";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Agile Git</h1>
      </div>

      <nav className="header__nav">
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
}

module.exports = Header;
