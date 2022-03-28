import React from 'react';
import {Link} from 'react-router-dom';


class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            datosCargados: false,
            paciente:[]
        }
    }

    cambioValor= (e) => {
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({paciente:state});
    }

    
    enviarDatos = (e) => {
        e.preventDefault();
        console.log("El formulario fue enviado");

    }
    //componentDidMount
    componentWillUnmount(){

        console.log(this.props.match.params.id);

        fetch("http://localhost/pacientes/?consultar="+this.props.match.params.id)
        .then(respuesta => respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta)

            this.setState({
                datosCargados: true,
                paciente:datosRespuesta[0]})
        })
        
        .catch(console.log)
    }
   
    render() { 

        const{datosCargados, paciente}=this.state;

        if(!datosCargados){return (<div>Cargando....</div>)}
        else{

        return ( <div className="card">
            <div className="card-header">
                Editar clientes
            </div>
            <div className="card-body">
                

                <form onSubmit={this.enviarDatos}>

                {paciente.id}

                        <div className="form-group">
                            <label htmlFor="">N° Documento:</label>
                            <input type="text" name="documento" onChange={this.cambioValor} value={paciente.documento} id="documento" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Nombres:</label>
                            <input type="text" name="nombres" onChange={this.cambioValor} value={paciente.nombres} id="nombres" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Apellidos:</label>
                            <input type="text" name="apellidos" onChange={this.cambioValor} value={paciente.apellidos} id="apellidos" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Correo:</label>
                            <input type="text" name="correo" onChange={this.cambioValor} value={paciente.correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Telefono:</label>
                            <input type="text" name="telefono" onChange={this.cambioValor} value={paciente.telefono} id="telefono" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Sexo:</label>
                            <input type="text" name="sexo" onChange={this.cambioValor} value={paciente.sexo} id="sexo" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Edad:</label>
                            <input type="text" name="edad" onChange={this.cambioValor} value={paciente.edad} id="edad" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Notas:</label>
                            <input type="text" name="notas" onChange={this.cambioValor} value={paciente.notas} id="notas" className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Escribe el asunto de la cita</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Fecha:</label>
                            <input type="text" name="fecha" onChange={this.cambioValor} value={paciente.fecha} id="fecha" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Actualizar</button>
                            <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                        </div>
                    
                    </form>

            </div>
            <div className="card-footer text-muted">
            </div>
        </div> );

        }
    }
}
 
export default Editar;