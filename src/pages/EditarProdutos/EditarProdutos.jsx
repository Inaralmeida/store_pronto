import React, { useState } from 'react'
import LinhaEdicao from '../../Components/LinhaEdicao/LinhaEdicao'
import Notificacao from '../../Components/Notificacao/Notificacao'
import S from './EditarProdutos.module.css'

const EditarProdutos = ({produtos, setHouveAlteracoes}) => {
    const [conteudoNotificacao, setConteudoNotificacao] = useState({
        mostrar: false,
        type: '',
        texto: ''
    })

    return (
        <div className={S.container}>
            {
                conteudoNotificacao.mostrar && 
                <Notificacao 
                conteudoNotificacao={conteudoNotificacao}
                setConteudoNotificacao={setConteudoNotificacao}/>
            }
            
            {
                !!produtos && (
                    produtos.map((produto)=>(
                        <LinhaEdicao
                        key={produto.id}
                         produto={produto}
                         setConteudoNotificacao={setConteudoNotificacao}
                         setHouveAlteracoes={setHouveAlteracoes}
                         />
                    ))
                )
            }
           
        </div>
    )
}

export default EditarProdutos