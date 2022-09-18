import { Link } from "react-router-dom";
export default function Producto ({ id, nombre, description, detail }) {
    return (        
            <tr>
                <th>{id}</th>
                <th>{nombre}</th> 
                <th>{description}</th>  
                <th><Link className="btn btn-danger" target="_blank" rel="nofollow" to={detail}>Detalle</Link></th>                                      
            </tr>
    );
}