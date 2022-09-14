import './App.css'; 
//import propTypes from "prop-types";
import { useState, useEffect } from 'react';
import BigCard from './components/BigCard';
import MiniCard from './components/MiniCard';
import Sidebar from './components/Sidebar';
import CategoriasInDB from './components/category/CategoriasInDB';
import UsuarioInDB from './components/usuarios/UsuarioInDB';
//import ProductoInDB from './components/productos/ProductoInDB';
import { EXPRESS_HOST } from './components/host';


function App() {

    /**************cantidad de usuarios *****************/
    const [apiTotalUsuarios, setTotalUsuarios]= useState(0);
    async function fechUsuarios( ){
        const response= await fetch(EXPRESS_HOST+"/user/api/list");
        const result= await response.json();
        const apiTotalUsuarios= result.meta.totalusuarios;
        setTotalUsuarios(apiTotalUsuarios);
    }    

    /**************cantidad de productos *****************/
    const [apiTotalProductos, setTotalProductos]= useState(0);
    async function fechProductos( ){
        const response= await fetch(EXPRESS_HOST+"/productos/api/list");
        const result= await response.json();
        const apiTotalProductos= result.meta.totalproductos;
        setTotalProductos(apiTotalProductos);
    }   

    const [apiTotalCategorias, setTotalCategorias]= useState(0);
    async function fechCategorias( ){
        const response= await fetch(EXPRESS_HOST+"/productos/api/categorias");
        const result= await response.json();
        const apiTotalCategorias= result.meta.countByCategory;
        setTotalCategorias(apiTotalCategorias);
    }   
    useEffect(()=>{
        fechUsuarios();
    },[]);

    useEffect(()=>{
        fechProductos();
    },[]);

    useEffect(()=>{
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
    <div id="wrapper">
        {/* <!-- Sidebar */}
            <Sidebar/>
        {/* <!-- End of Sidebar */}

        {/* <!-- Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
                {/* <!-- Main Content */}
                <div id="content">
                    {/* <!-- Content Row Top */}
                    <div className="container-fluid pt-5">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard Teme</h1>
                        </div>
                        
                        {/* <!-- Content Row Movies*/}
                        <div className="row">
                            {/* <!-- totales de minicar */}
                                {miniCards.map((data) => {
                                    return <MiniCard {...data} key={data.title} />;
                                })}
                            {/* <!-- Total awards */}
                        </div>
                        {/* <!-- Content Row Last Movie in Data Base */}
                        <div className="panel">
                            {/* <!-- Last Categorias in DB */}
                            <BigCard><CategoriasInDB/></BigCard>
                            {/* <!-- End content row last categorias in Data Base */}                            
                                                
                            {/* <!-- End content row last categorias in Data Base */}
                            <BigCard><UsuarioInDB/></BigCard>
                            {/* <!-- Productos in DB */}
                        </div>  
                                            
                    </div>
                    {/* <!--End Content Row Top*/}
                </div>
                {/* <!-- End of MainContent */}

                {/* <!-- Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Dashboard 2021</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer */}
        </div>
        {/* {/* <!-- End of Content Wrapper */}
    </div> 
  )
}

export default App;
