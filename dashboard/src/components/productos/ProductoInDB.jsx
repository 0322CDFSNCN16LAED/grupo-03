import React from "react";
import { Component } from "react";
import Producto from "./Producto";
const EXPRESS_HOST = "http://localhost:3002";

export default class ProductosInDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/productos/api/list`);
        const productosResult = await result.json();
        const newProductos = productosResult.data.productos;
        this.setState({
            productos: newProductos,
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800">
                    Tabla de Productos
                </h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"> 
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th> 
                                        <th>Descripcion</th>   
                                        <th>Detalle</th>                                      
                                    </tr>
                                </thead>                               
                                <tbody>                                    
                                    {this.state.productos.map((producto) => {
                                        return <Producto {...producto} key={producto.id} />;
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
