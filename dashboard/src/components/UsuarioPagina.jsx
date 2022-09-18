import '../App.css'; 
import BigCard from '../components/BigCard';
import UsuarioInDB from '../components/usuarios/UsuarioInDB';

export default function UsuarioPagina() {   
  return (
    <div id="wrapper">        
        {/* <!-- Content Row Last Usuario in Data Base */}
        <div className="panel">                            
            <BigCard><UsuarioInDB/></BigCard>
        </div> 
    </div>              
  )
}

