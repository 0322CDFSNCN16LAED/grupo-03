import React from 'react';
import logo from "../assets/images/logo-teme.png"
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        
        <ul className="navbar-nav pt-1 bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar">
            {/* <!-- Sidebar - Brand */}
            <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="/"
            >
                <div className="sidebar-brand-icon">
                    <img
                        className="w-50"
                        src={logo}
                        alt="Teme"
                    />
                </div>
            </a>

            {/* <!-- Divider */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Teme</span>
                </Link>
            </li>

            {/* <!-- Divider */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading */}
            <div className="sidebar-heading">Acciones</div>

            {/* <!-- Nav Item - Pages */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/lisproductos">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Productos</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Pages */}
            <li className="nav-item">
                <Link className="nav-link" to="/lisusuarios">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Usuarios</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Pages */}
            <li className="nav-item">
                <Link className="nav-link" to="/liscategorias">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Categorias</span>
                </Link>
            </li>
            
            {/* <!-- Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    
    );
}

export default Sidebar