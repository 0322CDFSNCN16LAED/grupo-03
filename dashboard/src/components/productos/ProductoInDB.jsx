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
                <h5 className="pl-2 mb-2 m-0 font-weight-bold text-gray-800">
                    LISTA DE PRODUCTOS
                </h5>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4 p-extra">
                    <div className="card-body p-extra2">
                        <div className="table-responsive">
                            <table
                                className="table table-bordered w-100vw"
                                id="dataTable"
                                width="100%"
                                cellSpacing="0"> 
                                <thead>
                                    <tr className="text-gray-900">
                                        <th>Id</th>
                                        <th>Nombre</th> 
                                        <th>Descripcion</th>   
                                        <th>Detalle</th>                                      
                                    </tr>
                                </thead>                               
                                <tbody className="text-gray-600">                                    
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
