import React from 'react'
import S from './CardProduto.module.css'

const CardProduto = ({produto}) => {

    
    return (
        <div className={S.container}>
            <img
            className={S.imagem}
            src={produto.url} 
            alt={produto.nome} />
            <p className={S.nome}>{produto.nome}</p>
            <small>{produto.preco}</small>
        </div>
    )
}

export default CardProduto
