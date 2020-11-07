import React from 'react';
import css from './Header.module.css';

console.log(css)
const Header = (props) => {
    return (
        <header className={css.header}>
          Header
        </header>
    );
}

export default Header;