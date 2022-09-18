export default function ProductoDetalle ({ nombre, description, image }) {
    return (        
            <div className="text-center mb-3">
                <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-5"
                    style={{ width: "40rem" }}
                    src={image}
                    alt={nombre}
                />
                 <p>{description}</p> 
            </div>                   
        
    );
}