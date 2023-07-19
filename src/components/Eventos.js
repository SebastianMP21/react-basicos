import React, {Component} from "react";

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        console.log("Sumando")
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar() {
        console.log("Restando")
        console.log(this);
        this.setState({
            contador: this.state.contador -1,
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}


//Properties Initializer
export class EventosES7 extends Component {
   
    state = {
        contador: 0,
    }

    //Arrow functions
    //no usamos bind porque ya hereda el contexto
    //Ecma Script 7
    sumar = (e) => {
        console.log("Sumando")
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        console.log("Restando")
        console.log(this);
        this.setState({
            contador: this.state.contador -1,
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// function Boton(props){
//     return(<button onClick={props.myOnClick}>Botón hecho componente</button>)
// }

const Boton = ({myOnClick}) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends Component {
    //manejador de Eventos habitual en React(puede tener cualquier nombre)
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.NativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
        };

    render() {
        return ( 
            <div>
                //Ahora con esta sintaxis, quien maneja el evento no es HandleCLick sino la Arrow function
                <h2>Mas Sobre Eventos</h2>         
                <button 
                onClick={(e) => 
                    this.handleClick(e, "Hola pasando parámetro desde un evento")}
                    >
                     Saludar
                    </button>
                    /* Evento Personalizado */
                    {/* <Boton onClick={(e) =>
                        this.handleClick(e, "Hola pasando parámetro desde un evento")
                    }
                    /> */}
                    <Boton 
                    myOnClick={(e) =>
                        this.handleClick(e, "Hola pasando parámetro desde un evento")
                    }
                    /> 

            </div>
        )
    }
}