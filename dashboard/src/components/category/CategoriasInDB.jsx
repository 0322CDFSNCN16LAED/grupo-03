import React, { Component } from "react";
import BigCard from "../BigCard";
import Categoria from "./Categoria"

const EXPRESS_HOST = "http://localhost:3002";

export default class CategoriasInDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/productos/api/categorias`);
        const categoriaResult = await result.json();
        const newCategorias = categoriaResult.data;
        console.log(newCategorias);
        this.setState({
            categorias: newCategorias,
        });
       
    };

    render() {
        return (
            <BigCard title="Categorias en la Base de Datos">
                <div className="row">
                    {this.state.categorias ? this.state.categorias.map((categoria) => {
                        return <Categoria categoria={categoria.category} key={categoria.id} />;
                    }):<p>Cargando...</p>}
                </div>
            </BigCard>
        );
    }
}
