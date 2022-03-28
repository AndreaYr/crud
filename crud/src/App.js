import './App.css';
import Listar from './components/Listar';
import Crear from './components/Crear';
import Editar from './components/Editar';

import { Routes, BrowserRouter as Router} from "react-router-dom";
import { Link } from "react-router-dom";


function App() {
  return (

    <Router>
      <div className='container'>
        <nav className="navbar navbar-expand navbar-light bg-light">
              <div className="nav navbar-nav">
                  <Link className="nav-item nav-link active" to={"/"}>sistema<span className="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link" to={"/crear"}>Crear Cita</Link>
                  <Link className="nav-item nav-link" to={"/editar"}>Editar Cita</Link>

              </div>
        </nav>
        <Listar></Listar>
        <Crear></Crear>
        <Editar></Editar>
        <Routes exact path='/' component={Listar}></Routes>
        <Routes path='/crear' component={Crear}></Routes>
        <Routes path='/editar/:id' component={Editar}></Routes>

      </div>
        

    </Router>
  );
}

export default App;
