import '../App.css'; 
import BigCard from '../components/BigCard';
import CategoriasInDB from '../components/category/CategoriasInDB';

export default function CategoriaPagina() {   
  return (
    <div id="wrapper">        
        {/* <!-- Content Row Last Usuario in Data Base */}
        <div className="panel">                            
            <BigCard><CategoriasInDB/></BigCard>
        </div> 
    </div>              
  )
}