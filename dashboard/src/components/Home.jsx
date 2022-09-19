import React from 'react';
import { useState, useEffect } from 'react';
import BigCard from '../components/BigCard';
import MiniCard from '../components/MiniCard';
import ProductoLastId from '../components/productos/ProductoLastId'; 
import UsuarioLastId from '../components/usuarios/UsuarioLastId'; 
import { EXPRESS_HOST } from '../expressHost';

//const EXPRESS_HOST = "http://localhost:3002";

export default function Home() { 
    /**************cantidad de usuarios *****************/
    const [apiTotalUsuarios, setTotalUsuarios]= useState(0);
    async function fechUsuarios( ){
        const response= await fetch(EXPRESS_HOST+"/user/api/list");
        const result= await response.json();
        const apiTotalUsuarios= result.meta.totalusuarios;
        console.log('total usuario: '+apiTotalUsuarios)
        setTotalUsuarios(apiTotalUsuarios);
    } 

    /**************cantidad de productos *****************/
    const [apiTotalProductos, setTotalProductos]= useState(0);
    async function fechProductos( ){
        const response= await fetch(EXPRESS_HOST+"/productos/api/list");
        const result= await response.json();
        const apiTotalProductos= result.meta.totalproductos;
        console.log('total productos:'+apiTotalProductos);
        setTotalProductos(apiTotalProductos);
    }   

    /**************cantidad de categoria *****************/
    const [apiTotalCategorias, setTotalCategorias]= useState(0);
    async function fechCategorias( ){
        const response= await fetch(EXPRESS_HOST+"/productos/api/categorias");
        const result= await response.json();
        const apiTotalCategorias= result.meta.countByCategory;
        console.log('total categorias: '+apiTotalCategorias);
        setTotalCategorias(apiTotalCategorias);
    }   

    useEffect(()=>{
        fechUsuarios();
        fechProductos();
        fechCategorias();
    },[]);  

    const miniCards = [
        {                    
            title: "Total Productos",
            color: "primary",
            value: apiTotalProductos,            
            icon: "fa-bicycle"
        },
        {            
            title: "Total Usuarios",
            color: "success",
            value: apiTotalUsuarios,            
            icon: "fa-user"
        },
        {            
            title: "Total Categorias",
            color: "warning",
            value: apiTotalCategorias,            
            icon: "fa-list"
        },
    ]

return (
    <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard TEME</h1>
        </div>

        {/* <!-- Content Row Movies--> */}
        <div className="row">
            {/* <!-- Movies in Data Base --> */}
            {miniCards.map((data) => {
                return <MiniCard {...data} key={data.id} />;
            })}
        </div>
        {/* <!-- End movies in Data Base --> */}

        {/* <!-- Content Row Last Movie in Data Base --> */}
        <div className="row">
            <BigCard title="Último Producto">
                <ProductoLastId/>
            </BigCard>    
            <BigCard title="Último Usuario">
                <UsuarioLastId/>
            </BigCard>                   
        </div>
    </>
);
}


