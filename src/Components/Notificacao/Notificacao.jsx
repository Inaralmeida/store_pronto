import React, { useEffect } from 'react'
import { AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import S from './Notificacao.module.css'

const Notificacao = ({setConteudoNotificacao, conteudoNotificacao}) => {
    const {type, texto} = conteudoNotificacao
    useEffect(()=>{
        setTimeout(()=>{
            setConteudoNotificacao(false)
        }, 5000)
    }, [setConteudoNotificacao])


    const background = {
        backgroundColor: type === 'sucesso' ? 'var(--sucesso)' : 'var(--cuidado)'
    }

    return (
        <div className={S.container} style={background}>
            {texto}
            {
                type === 'sucesso' ? 
                <AiFillCheckCircle size={30}/>:
                <AiFillCloseCircle size={30}/>
            }
        </div>
    )
}

export default Notificacao
