import React from 'react'
import S from './Header.module.css'

const Header = () => {
    return (
        <div className={S.container}>
            <h1>
            Store Tech
            </h1>
            <nav className={S.nav}>
                <a href="/">VER</a>
                <a href="/editar">EDITAR</a>
                <a href="/adicionar">ADICIONAR</a>
            </nav>
        </div>
    )
}

export default Header