import React from "react";

function Categoria({category, productos}) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card text-white bg-dark  shadow">
                <div className="card-body">
                    {category} - {productos.length} 
                </div>
            </div>
        </div>
    );
}
export default Categoria;