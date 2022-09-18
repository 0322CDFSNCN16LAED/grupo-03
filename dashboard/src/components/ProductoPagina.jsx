import '../App.css'; 
import BigCard from './BigCard';
import ProductoInDB from '../components/productos/ProductoInDB';

export default function ProductoPagina() {
  return (
    <div id="wrapper">    
        {/* <!-- Content Row Last Productos in Data Base */}
        <div className="panel">
            <BigCard><ProductoInDB/></BigCard>
        </div>             
    </div>    
  )
}


