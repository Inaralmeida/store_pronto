
import S from './app.module.css';
import Home from './pages/Home/Home';
import EditarProdutos from './pages/EditarProdutos/EditarProdutos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import AddProduto from './pages/AddProduto/AddProduto';

function App() {
  const produto = 
    {
      "id": 0,
      "nome": " Câmera Canon Powershot Sx420 Is 20mp Hd 42x",
      "url": "https://m.media-amazon.com/images/I/51e-5K1yCXL._AC_.jpg",
      "descricao": "Câmera Compacta Compacto Com Um Sensor De 20Mp E Um 40X Óptico Lente Zoom Equivalente A 24-960Mm No Formato 35Mm A Sx420. Funciona Com Processador De Imagem Digic 4 + Para Fornecer Uma Câmera Sensível Com Imagens De Qualidade. A Lente Possui Um Estabilizador De Imagem Óptico E Um Sistema Inteligente Para Reduzir O Aparecimento Do Movimento Da Câmera Em Uma Variedade De Diferentes Situações De Disparo Is. A Sx420 Tem Um Modo De Filme Para Capturar Vídeo De Alta Definição Em 1280 X 720P E Tem Uma Tela Lcd De 3,0.  Para A Composição E Imagem Revisar. A Câmera Também Possui O Modo De Disparo Auto Inteligente Que Irá Selecionar Automaticamente As Melhores Definições Para A Cena Com Base Em Uma Variedade De Diferentes Configurações Predefinidas.",
      "fornecedorID": 0,
      "categoria": "camera",
      "marca": "Canon",
      "preco": 2067.27,
      "estoque": 50,
      "vendido": 0,
      "avaliacoes": 0
    
}
  return (
      <Router>
    <div className={S.container}>
      <Header/>
        <main className={S.main}>
        <Switch>
          <Route exact path='/'>
            <Home produto={produto}/>
          </Route>
          <Route exact path='/editar'>
            <EditarProdutos produto={produto}/>
          </Route>
          <Route exact path='/adicionar'>
            <AddProduto produto={produto}/>
          </Route>
        </Switch>
        </main>
    </div>
      </Router>
  );
}

export default App;
