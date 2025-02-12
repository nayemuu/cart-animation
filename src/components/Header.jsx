import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div>
          <h1>The Paint Shop</h1>
          <p>
            We <strong>love</strong> watching the paint dry
          </p>
        </div>
        <div className="shopping-bag">
          <div
            className="shopping-bag__target"
            id="js-shopping-bag-target"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
              clipRule="evenodd"
            />
          </svg>
          <strong className="shopping-bag__counter">
            <span id="js-shopping-bag-counter">0</span>
          </strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
