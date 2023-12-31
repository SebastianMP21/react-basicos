import logo from './logo.svg';
import './App.css';
import  Componente  from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHook';
import AjaxHooks from './components/AjaxHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>

        </section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <AjaxApis/>
        <Componente msg="Hola soy un Componente Funcional Expresado desde una prop"/>
        <hr/>
        <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={19} 
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"Sebas", correo:"sebas@gmail.com"}}
          funcion={(num)=> num*num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="Soy un componente pasado como Prop"/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloVida/>
          <hr/>
          <ContadorHooks titulo="Seguidores" />
          <hr/>
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
        </section>
      </header>
      
      <section>
        
      </section>
    </div>
  );
}

export default App;
