import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from './components/Home'; 
import ProductoPagina from './components/ProductoPagina'; 
import UsuarioPagina from './components/UsuarioPagina'; 

import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div id="wrapper">
            {/* <!-- Sidebar --> */}
            <Sidebar />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* <!-- Main Content --> */}
                <div id="content">
                    {/* <!-- Content Row Top --> */}
                    <div className="container-fluid pt-5">
                        <Switch>                            
                            <Route path="/" component={Home} exact={true} />   
                            <Route path="/lisproductos" component={ProductoPagina} exact={true} />  
                            <Route path="/lisusuarios" component={UsuarioPagina} exact={true} />                                                                 
                        </Switch>
                    </div>
                    {/* <!--End Content Row Top--> */}
                </div>
                {/* <!-- End of MainContent --> */}

                {/* <!-- Footer --> */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Dashboard 2021</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}
            </div>
            {/* <!-- End of Content Wrapper --> */}
        </div>
    );
}

export default App;
