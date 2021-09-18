import React from 'react'
import S from './CardProduto.module.css'

const CardProduto = ({produto}) => {

    const handleCoverterParaBRL =()=>{
        let preco = produto.preco
        if(typeof produto.preco === 'string'){
            preco = parseFloat(produto.preco)
        }
        const brl = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        return brl
    }    
    return (
        <div className={S.container}>
            <img
            className={S.imagem}
            src={produto.url} 
            alt={produto.nome} />
            <p className={S.nome}>{produto.nome}</p>
            <small>{handleCoverterParaBRL()}</small>
        </div>
    )
}

export default CardProduto
