//Estructura de clase Componente mas robusto dentro de React
import React, {Component} from 'react';
class Stateful extends Component {
    constructor(props){
        super(props);
        this.state = {
            hello: 'Hola Mundo',
            edad: 22
        }
    }
    render(){
        return(
            <h1>{this.state.hello}}</h1>
        )
    }
}

export default Stateful;