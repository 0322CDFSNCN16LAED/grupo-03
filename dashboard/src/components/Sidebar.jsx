import React from 'react';

import logo from "../assets/images/logo-teme.png"

function Sidebar() {
    return (
        
        <ul
            className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
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
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Temme</span></a
                >
            </li>

            {/* <!-- Divider */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading */}
            <div className="sidebar-heading">Acciones</div>

            {/* <!-- Nav Item - Pages */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Productos</span>
                </a>
            </li>

            {/* <!-- Nav Item - Charts */}
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Usuarios</span></a
                >
            </li>

            {/* <!-- Nav Item - Tables */}
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Informacion</span></a
                >
            </li>

            {/* <!-- Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>
    
    );
}

export default Sidebar