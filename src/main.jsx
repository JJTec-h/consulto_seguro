import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import Rotas from './router/routes'

import NovoAssociado from './router/associados/addAssociado/NovoAssociado.jsx';
import VeiculoInfo from './router/veiculos/veiculosInfo/VeiculoInfo.jsx';
import NovoVeiculo from './router/veiculos/addVeiculo/NovoVeiculo.jsx';
import Contratos from './router/contratos/contrato/Contratos.jsx';
import ContratoInfo from './router/contratos/contratosInfo/ContratoInfo.jsx';
import AddContrato from './router/contratos/addContrato/AddContrato.jsx';
import Mensagem from './router/mensagem/Mesagem.jsx';
import Home from './router/home/Home.jsx';



const router = createBrowserRouter([
  {
    path: "/consulto_seguro/",
    element: <Login />,
  },
  {
    path:"/consulto_seguro/home",
    element: <Home />
  },
  {
    path: "/consulto_seguro/associados",
    element: <Associados />,
  },
  {
    path: "/consulto_seguro/associado/:id",
    element: <AssociadosInfo />
  },
  {
    path: "/consulto_seguro/NovoAssociado",
    element: <NovoAssociado />
  },
  {
    path: "/consulto_seguro/veiculos",
    element: <Veiculos />,
  },
  {
    path: "/consulto_seguro/veiculo/:id",
    element: <VeiculoInfo />
  },
  {
    path: "/consulto_seguro/NovoVeiculo",
    element: <NovoVeiculo />
  },
  {
    path: "/consulto_seguro/contratos",
    element: <Contratos />
  },
  {
    path: "/consulto_seguro/contrato/:id",
    element: <ContratoInfo />
  },
  {
    path: "/consulto_seguro/NovoContrato",
    element: <AddContrato />
  },

  {
    path: "/consulto_seguro/Mensagem",
    element: <Mensagem />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rotas/>
  </React.StrictMode>,
)
