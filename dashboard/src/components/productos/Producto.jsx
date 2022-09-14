export default function Producto ({ id, nombre, description, detail }) {
    return (        
            <tr>
                <th>{id}</th>
                <th>{nombre}</th> 
                <th>{description}</th>  
                <th>{detail}</th>                                      
            </tr>
    );
}