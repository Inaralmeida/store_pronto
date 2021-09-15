import React from 'react'
import LinhaEdicao from '../../Components/LinhaEdicao/LinhaEdicao'
import S from './EditarProdutos.module.css'

const EditarProdutos = ({produto}) => {
    return (
        <div className={S.container}>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
            <LinhaEdicao produto={produto}/>
        </div>
    )
}

export default EditarProdutos