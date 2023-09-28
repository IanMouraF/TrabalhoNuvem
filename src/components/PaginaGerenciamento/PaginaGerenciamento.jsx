import Header from '../Header/Header'
import Produtos from '../Produtos/Produtos'
import { useState, useEffect } from 'react'
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore/lite"
import { firestore } from "../../firebase"
import './ModalEditar.css'

const PaginaGerenciamento = () => {
    //ESTILO NAV
    const customHeader = {
        height: '15vh',
    }
    const customNav = {
        visibility: 'hidden'
    }
    const lineStyle = {
        visibility: 'hidden'
    }

     //ESTILO CARDAPIO
     const estiloBotaoEditar = {
        padding: '0.5em 1.5em',
        backgroundColor: '#3D991E',
        color: 'white',
        textAlign: 'center',
        border: 'none',
        borderRadius: '0.2em',
        fontSize: '0.9em',
        cursor: 'pointer',
    }
    const estiloBotaoExcluir = {
        padding: '0.5em 1.5em',
        backgroundColor: '#F34646',
        color: 'white',
        textAlign: 'center',
        border: 'none',
        borderRadius: '0.2em',
        fontSize: '0.9em',
        cursor: 'pointer',
    }
    const estiloDivBotoes = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em'
    }
    const estiloCardProduto = {
        borderRadius: '0.8em',
        backgroundColor: '#e2eedf'
    }
    const estiloGridProduto = {
        backgroundColor: 'white',
        padding: '3em',
        borderRadius: '0.8em',
        gap: '2.5em',
    }

    const [appData, setAppData] = useState({
        cardapio: [],
        carrinho: {
            itens: [],
            observacoes: "",
            endereco: "",
            formaPagamento: "",
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            const produtosCol = collection(firestore, "produtos");
            const produtosSnapshot = await getDocs(produtosCol);
            const itens = produtosSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setAppData((prevData) => ({
                ...prevData,
                cardapio: itens,
            }));
        };
        fetchData();
    }, []);


    //FUNÇAO EXCLUIR
    const acaoBotaoExcluir = async(produtoId) => {
        await deleteDoc(doc(firestore, "produtos", produtoId));
        setAppData((prevData) => ({
            ...prevData,
            cardapio: prevData.cardapio.filter((product) => product.id !== produtoId),
        }))

        alert("produto excluído com sucesso")
    }

    //MODAL EDIÇÃO + FUNÇÃO EDITAR
    const [mostrarModal, setMostrarModal] = useState(false)
    const [produtoIdAtualizado, setProdutoIdAtualizado] = useState(null)
    const [productNome, setProductNome] = useState()

    const acaoModalEditar = (produtoId, productNome) => {
        setMostrarModal(true)
        setProdutoIdAtualizado(produtoId)
        setProductNome(productNome)
    }

    const [value, setValue] = useState({
        nome: '',
        descricao: '',
        preco: '',
        url: ''
    })

    const handleChange = (nome) => (e) => {
        e.preventDefault()
        setValue({...value, [nome]: e.target.value})
    }

    const {nome, descricao, preco, url} = value

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!produtoIdAtualizado) {
            return
        }

        const produtoEditado = {}

        if (value.nome.trim() !== '') {
            produtoEditado.nome = value.nome
        }
    
        if (value.descricao.trim() !== '') {
            produtoEditado.descricao = value.descricao
        }
    
        if (value.preco.trim() !== '') {
            produtoEditado.preco = value.preco
        }
    
        if (value.url.trim() !== '') {
            produtoEditado.url = value.url
        }

        if (Object.keys(produtoEditado).length === 0) {
            alert("Nenhum campo preenchido para atualizar")
            setMostrarModal(false)
            return;
        }

        await updateDoc(doc(firestore, "produtos", produtoIdAtualizado), produtoEditado);

        setAppData((prevData) => ({
            ...prevData,
            cardapio: prevData.cardapio.map((product) =>
                product.id === produtoIdAtualizado ? { ...product, ...produtoEditado} : product
            ),
        }))
        
        alert("produto editado com sucesso")

        setMostrarModal(false)
        setProdutoIdAtualizado(null)

        setValue({
            nome: '',
            descricao: '',
            preco: '',
            url: '',
        })
    }
   
    return (
        <div className='containerGerenciamento'>
            <Header headerStyle={customHeader} navStyle={customNav} lineStyle={lineStyle}/>

            <div style={{padding: '0 3em'}}>
                <Produtos appData={appData} setAppData={setAppData} 
                    textoBotaoEditar='Editar' 
                    textoBotaoExcluir='Excluir'
                    estiloBotaoEditar={estiloBotaoEditar}
                    estiloBotaoExcluir={estiloBotaoExcluir}
                    estiloDivBotoes={estiloDivBotoes}
                    estiloCardProduto={estiloCardProduto}
                    estiloGridProduto={estiloGridProduto}
                    acaoBotaoExcluir={acaoBotaoExcluir}
                    acaoBotaoEditar={acaoModalEditar}
                />
            </div>

            {mostrarModal && (
                <div className='modalEditar'>
                    <h2>Editar Produto: {productNome}</h2>

                    <form onSubmit={handleSubmit} className='formEditar'>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" value={nome} onChange={handleChange('nome')}/>
            
                        <label htmlFor="descricao">Descrição:</label>
                        <input type="text" id="descricao" value={descricao} onChange={handleChange('descricao')}/>

                        <label htmlFor="preco">Preço:</label>
                        <input type="text" id="preco" value={preco} onChange={handleChange('preco')}/>

                        <label htmlFor="url">Url:</label>
                        <input type="text" id="url" value={url} onChange={handleChange('url')}/>
            
                        <button type="submit" className='buttonEditar'>Ok</button>
                    </form>
        
                </div>
                )}
        </div>
    )
}

export default PaginaGerenciamento