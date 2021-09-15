import React, { useState } from 'react'
import S from './AddProduto.module.css'
import imageMok from '../../assets/img/Add_Image_icon.svg'



const AddProduto = ({ produtos }) => {

    const fornecedores = [
        { value: 0, label: 'Amazon' },
        { value: 1, label: 'shopee' },
        { value: 2, label: 'OLX' },
        { value: 3, label: 'Kalunga' }
    ]
    const categorias = [
        { value: 0, label: 'celular' },
        { value: 1, label: 'camera' },
        { value: 2, label: 'cpu' },
        { value: 3, label: 'monitor' }
    ]
    const marcas = [
        { value: 0, label: 'motorola' },
        { value: 1, label: 'sony' },
        { value: 2, label: 'sansung' },
        { value: 3, label: 'lenovo' }
    ]

    const [nome, setNome] = useState('')
    const [url, setUrl] = useState('')
    const [descricao, setDescricao] = useState('')
    const [fornecedorId, setFornecedorId] = useState(fornecedores[0].value)
    const [categoria, setCategoria] = useState(categorias[0].label)
    const [marca, setMarca] = useState(marcas[0].label)
    const [estoque, setEstoque] = useState('')
    const [preco, setPreco] = useState('')

    const handleAddicionarProduto = (e) => {
        const dados = {
            nome: nome,
            url: url,
            descricao: descricao,
            fornecedorId: fornecedorId,
            categoria: categoria,
            marca: marca,
            estoque: estoque,
            preco: preco,
        }
        console.log(dados);
    }

    const handleCancelar = (e) => {
        e.preventDefault()
        setNome('')
        setUrl('')
        setDescricao('')
        setFornecedorId(fornecedores[0].value)
        setCategoria(categorias[0].label)
        setMarca(marcas[0].label)
        setEstoque('')
        setPreco('')
        console.log(nome,
            url,
            descricao,
            fornecedorId,
            categoria,
            marca,
            estoque,
            preco);

    }



    return (
        <div className={S.container}>
            <form action="" className={S.form}>
                <section className={S.sectionTop}>
                    <img src={!!url ? url : imageMok} alt="" className={S.imagem} />
                    <div>
                        <fieldset
                            className={S.fieldset}>
                            <label
                                className={S.label}
                                htmlFor="">Nome do Produto</label>
                            <input
                                required
                                className={S.input}
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </fieldset>
                        <fieldset
                            className={S.fieldset}>
                            <label
                                className={S.label}
                                htmlFor="">Preço</label>
                            <input
                                required
                                className={S.input}
                                type="text"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                            />
                        </fieldset>
                        <fieldset
                            className={S.fieldset}>
                            <label
                                className={S.label}
                                htmlFor="">Url</label>
                            <input
                                required
                                className={S.input}
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </fieldset>
                    </div>
                </section>

                <section className={S.sectionBottom}>

                    <div className={S.divSectionBottom}>
                        <fieldset className={S.fieldset}>
                            <label className={S.label} htmlFor="">Categoria</label>
                            <select
                                required

                                className={S.select}
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}>
                                {
                                    categorias.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))
                                }

                            </select>
                        </fieldset>
                        <fieldset className={S.fieldset}>
                            <label className={S.label} htmlFor="">Marca</label>
                            <select
                                required

                                className={S.select}
                                value={fornecedorId}
                                onChange={(e) => setFornecedorId(e.target.value)}>
                                {
                                    fornecedores.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))
                                }

                            </select>
                        </fieldset>
                        <fieldset className={S.fieldset}>
                            <label className={S.label} htmlFor="">Marca</label>
                            <select
                                required

                                className={S.select}
                                value={marca}
                                onChange={(e) => setMarca(e.target.value)}>
                                {
                                    marcas.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))
                                }

                            </select>
                        </fieldset>
                        <button
                            onClick={handleCancelar}
                            className={S.btnCancel}
                        >Cancelar</button>
                    </div>

                    <section className={S.textArea}>
                        <fieldset className={S.fieldset}>
                            <label
                                className={S.label}
                                htmlFor="">Quantidade</label>
                            <input
                                required
                                type="number"
                                className={S.input}
                                value={estoque}
                                onChange={e => setEstoque(e.target.value)}
                            />
                        </fieldset>
                        <label
                            className={S.label}
                            htmlFor="">Descrição</label>
                        <textarea
                            required
                            value={descricao}
                            cols="34"
                            rows="7"
                            onChange={e => setDescricao(e.target.value)}
                        />

                        <button
                            onClick={handleAddicionarProduto}
                            className={S.btnCadastro}
                        >Adicionar Produto</button>
                    </section>
                </section>

            </form>
        </div>
    )
}

export default AddProduto
