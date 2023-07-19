import React,{Component} from "react";

export default class Padre extends Component {
    state = {
        contador: 0,
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }


    //aqui estamos mostrando nuestras funciones que luego mostraremos en nuestro app.js
    render(){
        return(
            <>
                <h2>Comunicación entre Componentes</h2>
                <p>contador<b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} 
                mensaje="Mensaje para el hijo 1" />
                <Hijo incrementarContador={this.incrementarContador} 
                mensaje="Mensaje para el hijo 2" />
            </>
        );
    }
}

//Aqui creo la función y le damos forma para luego llamarlo en el render 
function Hijo(props) {
    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.incrementarContador}>+</button>
        </>
    );
}