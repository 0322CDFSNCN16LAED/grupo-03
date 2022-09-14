import React from "react";

function Usuario({usuario}) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card text-white bg-dark  shadow">
                <div className="card-body">
                    {usuario}                     
                </div>
            </div>
        </div>
    );
}

export default Usuario;