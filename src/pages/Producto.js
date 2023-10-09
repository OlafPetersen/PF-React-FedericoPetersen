import { useParams } from "react-router-dom";

function DetalleProducto() {
    
    console.log(useParams())

    return (
        <div>
            <h1>Producto</h1>
        </div>
    )
}

export default DetalleProducto;