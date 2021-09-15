import React from 'react'
import S from './Home.module.css'
import CardProduto from '../../Components/CardProduto/CardProduto'
const Home = ({produto}) => {
    
    return (
        <div className={S.container}>
           <CardProduto
           produto={produto}
           />
           <CardProduto
           produto={produto}
           />
           <CardProduto
           produto={produto}
           />
           <CardProduto
           produto={produto}
           />
           <CardProduto
           produto={produto}
           />
           <CardProduto
           produto={produto}
           />
           <CardProduto
           produto={produto}
           />
          
        </div>
    )
}

export default Home
