import { Link } from "react-router-dom";
import React from "react";
import BigCard from "../BigCard";
import { useState, useEffect } from "react";

const EXPRESS_HOST = "http://localhost:3002";

export default function ProductoLastId () {   
    const [last, setLast] = useState(null);

    useEffect(() => {        
        fetch(`${EXPRESS_HOST}/productos/api/lastProduct`)
        .then((response) => response.json())
        .then((data) => {
            setLast(data);
        })
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        console.log("%actualizó el comp del ultimo producto", {
        last,
        });
    }, [last]);
          
    return (
            <BigCard>                
             {!last ? (
                    <p> Cargando...</p>
                ) : (                    
                    <div className="text-center mb-3">
                        <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-5"                    
                            src={last.data.picture}
                            alt={last.data.name}
                            style={{
                                width: "90%",
                                height: "400px",
                                objectFit: "cover",
                            }}
                        />
                        <p>{last.data.description}</p> 
                        <Link className="btn btn-danger" target="_blank" rel="nofollow" to={last.data.detail}>Detalle</Link>
                    </div>      
                )}
            </BigCard>
                
        )  
  }

