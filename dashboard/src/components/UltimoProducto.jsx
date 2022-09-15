import BigCard from './BigCard';
import bici from "../assets/images/bici-electrica-cortina.jpg";




export default function UltimoProducto() {
    return (
        <BigCard title="Ultimo Producto en la base de datos">
            <div className="text-center mb-3">
                <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-5"
                    style={{ width: "40rem" }}
                    src={bici}
                    alt=" Bicicleta "
                />
            </div>
            <p>
            Batería: LG 36 V/10.4 AH | 468 W. Motor: Bafang 350 W con sensor de velocidad. Autonomía: 45 km. Rodado: 29. Accesorios: Grip con mancuernas.
            </p>
            <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
            >
                Mostrar Detalle
            </a>
        </BigCard>
    );
}
