import React from "react";
import { Component } from "react";
import BigCard from "../BigCard";
import ProductoDetalle from "./ProductoDetalle";

const EXPRESS_HOST = "http://localhost:3002";

export default class ProductoLastId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: [],
        };
    }

    async componentDidMount() {
        const result = await fetch(`${EXPRESS_HOST}/api/lastProduct`);
        const productosResult = await result.json();
        const newProducto = productosResult.data.producto;        
        this.setState({
            producto: newProducto,
        });
    }

    render() {
        return (
            <BigCard title="Ultimo Producto en la base de datos">
                <ProductoDetalle/>
            </BigCard>
        );
  }
}
