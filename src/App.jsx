
import S from './app.module.css';
import Home from './pages/Home/Home';
import EditarProdutos from './pages/EditarProdutos/EditarProdutos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import AddProduto from './pages/AddProduto/AddProduto';
import { useEffect, useState } from 'react';
import APIRequest from './Services/api'
function App() {
  const [produtos, setProdutos] = useState([])
  const [houveAlteracoes, setHouveAlteracoes] = useState(false)
  useEffect(()=>{
    APIRequest('/produtos')
    .then((response)=> {
      setProdutos(response.data)
      console.log(response.data);
    })
  },[houveAlteracoes])
  return (
      <Router>
    <div className={S.container}>
      <Header/>
        <main className={S.main}>
        <Switch>
          <Route exact path='/'>
            <Home produtos={produtos}/>
          </Route>
          <Route exact path='/editar'>
            <EditarProdutos produtos={produtos} setHouveAlteracoes={setHouveAlteracoes}/>
          </Route>
          <Route exact path='/adicionar'>
            <AddProduto produtos={produtos}/>
          </Route>
        </Switch>
        </main>
    </div>
      </Router>
  );
}

export default App;
