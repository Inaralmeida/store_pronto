import React from 'react'
import S from './Home.module.css'
import CardProduto from '../../Components/CardProduto/CardProduto'
const Home = ({ produtos }) => {

    return (
        <div className={S.container}>
            {
                produtos &&
                produtos.map((produto) => (
                        <CardProduto
                            key={produto.id}
                            produto={produto}
                        />
                        
                    )
                )
            }


        </div>
    )
}

export default Home
