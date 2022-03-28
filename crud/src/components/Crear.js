import React from 'react';
import {Link} from 'react-router-dom';

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            documento: "",
            nombres: "",
            apellidos: "",
            correo: "",
            telefono: "",
            sexo: "",
            edad: "",
            notas: "",
            fecha: ""
         }
    }

    cambioValor= (e) => {
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }

    enviarDatos = (e) => {
        e.preventDefault();
        console.log("El formulario fue enviado");
    
        const{documento, nombres,apellidos,correo,telefono,sexo,edad,notas,fecha}=this.state;

        console.log(documento, nombres, apellidos, correo, telefono,sexo, edad, notas, fecha);

        var datosEnviar = {
            documento:documento, 
            nombres:nombres,
            apellidos:apellidos,
            correo:correo,
            telefono:telefono,
            sexo:sexo,
            edad:edad,
            notas:notas,
            fecha:fecha
        }

        fetch("http://localhost/pacientes/?insertar=1", {
            method:"POST",
            body:JSON.stringify(datosEnviar),
        })

        .then(respuesta => respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.props.history.push("/");
        })
        
        .catch(console.log)
    
    }


    render() { 

        const{documento, nombres,apellidos,correo,telefono,sexo,edad,notas,fecha}=this.state;

        return ( 

            <div className='card'>
                <div className='card-header'>
                    pacientes
                </div>
                <div className='card-body'>

                    <form onSubmit={this.enviarDatos}>

                        <div className="form-group">
                            <label htmlFor="">N° Documento:</label>
                            <input type="text" name="documento" onChange={this.cambioValor} value={documento} id="documento" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Nombres:</label>
                            <input type="text" name="nombres" onChange={this.cambioValor} value={nombres} id="nombres" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Apellidos:</label>
                            <input type="text" name="apellidos" onChange={this.cambioValor} value={apellidos} id="apellidos" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Correo:</label>
                            <input type="text" name="correo" onChange={this.cambioValor} value={correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Telefono:</label>
                            <input type="text" name="telefono" onChange={this.cambioValor} value={telefono} id="telefono" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Sexo:</label>
                            <input type="text" name="sexo" onChange={this.cambioValor} value={sexo} id="sexo" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Edad:</label>
                            <input type="text" name="edad" onChange={this.cambioValor} value={edad} id="edad" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Notas:</label>
                            <input type="text" name="notas" onChange={this.cambioValor} value={notas} id="notas" className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Escribe el asunto de la cita</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Fecha:</label>
                            <input type="text" name="fecha" onChange={this.cambioValor} value={fecha} id="fecha" className="form-control" placeholder="" aria-describedby="helpId" />
                        </div>

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agendar Nueva Cita</button>
                            <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                        </div>
                    
                    </form>
                </div>
                <div className='card-footer text-muted'>
                    


                </div>
            </div>
         );
    }
}
 
export default Crear;