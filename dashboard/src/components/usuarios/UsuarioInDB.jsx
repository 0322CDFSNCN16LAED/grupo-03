import React, { Component } from "react";
import BigCard from "../BigCard";
import Usuario from "./Usuario"

const EXPRESS_HOST = "http://localhost:3002";

export default class UsuarioInDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/user/api/list`);
        const usuariosResult = await result.json();
        const newUsuarios = usuariosResult.data;
        
        this.setState({
            usuarios: newUsuarios,
        });
       
    };

    render() {
        return (
            <BigCard title="Usuarios">
                <div className="row">
                    {this.state.usuarios ? this.state.usuarios.map((usuario) => {
                        return <Usuario usuario={usuario.name} key={usuario.id} />;
                    }):<p>Cargando...</p>}
                </div>
            </BigCard>
        );
    }
}
