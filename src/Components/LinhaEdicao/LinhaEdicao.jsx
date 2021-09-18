import React, { useState } from 'react'
import S from './LinhaEdicao.module.css'
import { AiFillCheckCircle, AiFillCloseCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import APIRequest from '../../Services/api'

const LinhaEdicao = ({ produto, setConteudoNotificacao, setHouveAlteracoes}) => {
    const [nome, setNome] = useState(produto.nome)
    const [url, setUrl] = useState(produto.url)
    const [preco, setPreco] = useState(produto.preco)
    const [ehEdicao, setEhEdicao] = useState(false)


    const handleUpdate = () =>{
        console.log(produto);
        const data = {
            ...produto,
            nome: nome,
            url: url,
            preco: preco
        }
        console.log(data);

        APIRequest.patch(`/produtos/${produto.id}`, data)
        .then((response)=>{
            if(response.status === 200){
                setConteudoNotificacao({
                    mostrar: true,
                    type: 'sucesso', 
                    texto: 'Produto atualizado com sucesso'})
                console.log('Atualizado com sucesso');
                setEhEdicao(false)
            }
        })
        .catch((erro)=>{
            console.log('Erro ao atualizar. Erro:', erro);
        })
    }

    const handleDelete = () =>{
        APIRequest.delete(`/produtos/${produto.id}`)
        .then((response)=>{
            if(response.status === 200){
                setConteudoNotificacao({
                    mostrar: true,
                    type: 'sucesso', 
                    texto: 'Produto excluido com sucesso'})
                setHouveAlteracoes(true)
            }
        })
    }

    return (
        <div className={S.container}>
            <img src={url} alt={nome} className={S.imagem} />

            <fieldset className={S.fieldset}>
                <label className={S.label} htmlFor="">NOME:</label>
                <input
                    disabled={ehEdicao ? false : true}
                    className={S.input}
                    type="text"
                    onChange={(e) => {
                        setNome(e.target.value)
                    }}
                    value={nome} />
            </fieldset>
            <fieldset className={S.fieldset}>
                <label className={S.label} htmlFor="">URL:</label>
                <input
                    disabled={ehEdicao ? false : true}
                    className={S.input}
                    type="text"
                    onChange={(e) => {
                        setUrl(e.target.value)
                    }}
                    value={url} />
            </fieldset>
            <fieldset className={S.fieldset}>
                <label className={S.label} htmlFor="">PREÇO:</label>
                <input
                    disabled={ehEdicao ? false : true}
                    className={S.input}
                    type="text"
                    onChange={(e) => {
                        setPreco(e.target.value)
                    }}
                    value={preco} />
            </fieldset>

            <div className={S.buttons}>

                {
                    ehEdicao ? (
                        <>
                            <AiFillCheckCircle
                            size={30}
                            style={{color: 'var(--sucesso)'}}
                            cursor='pointer'
                            onClick={handleUpdate}
                            />
                            <AiFillCloseCircle
                            cursor='pointer'
                            size={30}
                            onClick={(e) => setEhEdicao(false)}
                            style={{color: 'var(--cuidado)'}}
                            />
                        </>
                    ) : (
                        <>
                            <AiFillEdit
                            cursor='pointer'
                            size={30}
                            onClick={(e) => setEhEdicao(true)}
                            style={{color: 'var(--info)'}} 
                            />

                            <AiFillDelete
                            cursor='pointer'
                            size={30}
                            style={{color: 'var(--cuidado)'}} 
                            onClick={handleDelete}
                            />
                        </>
                    )
                }


            </div>
        </div>
    )
}

export default LinhaEdicao
