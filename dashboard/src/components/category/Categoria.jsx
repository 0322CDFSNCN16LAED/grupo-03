import React from "react";

function Categoria({ categoria}) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card text-white bg-dark  shadow">
                <div className="card-body">
                    {categoria} 
                </div>
            </div>
        </div>
    );
}
export default Categoria;