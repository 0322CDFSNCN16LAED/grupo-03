import './App.css'; 
import propTypes from "prop-types";


import bicicleta from "./assets/images/bici-electrica-cortina.jpg"
import BigCard from './components/BigCard';
import MiniCard from './components/MiniCard';
import Sidebar from './components/Sidebar';
import CategoriasInDB from './components/category/CategoriasInDB';

const miniCards = [
    {
        id: "1",
        title: "Total Productos",
        color: "primary",
        value: "25",
        icon: "fa-bicycle"
    },
    {
        id: "2",
        title: "Total Usuarios",
        color: "success",
        value: "79",
        icon: "fa-bicycle"
    },
    {
        id: "3",
        title: "Total Categorias",
        color: "warning",
        value: "67",
        icon: "fa-bicycle"
    },
]



function App() {
  console.log("Hola mundo!")
  return (
    <div id="wrapper">
    {/* <!-- Sidebar */}
 <Sidebar/>
    {/* <!-- End of Sidebar */}

    {/* <!-- Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content */}
        <div id="content">
           

            {/* <!-- Content Row Top */}
            <div className="container-fluid pt-5">
                <div
                    className="d-sm-flex align-items-center justify-content-between mb-4"
                >
                    <h1 className="h3 mb-0 text-gray-800">Dashboard Teme</h1>
                </div>

                {/* <!-- Content Row Movies*/}
                <div className="row">
                    {/* <!-- Movies in Data Base */}
                    {miniCards.map((data) => {
                return <MiniCard {...data} key={data.id} />;
              })}
                    {/* <!-- Total awards */}
                   
                    {/* <!-- Actors quantity */}
                   
                          {/* <!-- End movies in Data Base */}
                </div>

                {/* <!-- Content Row Last Movie in Data Base */}
                <div className="row">
                    {/* <!-- Last Movie in DB */}
                    <BigCard><CategoriasInDB/></BigCard>
                    {/* <!-- End content row last movie in Data Base */}
                    
                    {/* <!-- Genres in DB */}
                    <BigCard/>
                </div>
            </div>
            {/* <!--End Content Row Top*/}
        </div>
        {/* <!-- End of MainContent */}

        {/* <!-- Footer */}
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Dashboard 2021</span>
                </div>
            </div>
        </footer>
        {/* <!-- End of Footer */}
    </div>
    {/* {/* <!-- End of Content Wrapper */}
          </div> 
        
      
     
  )
}

export default App;
