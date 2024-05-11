import { Link } from "react-router-dom";

const Item = ({ modelo, precio, img }) => {

    return (
        <div className="item-card">
            <img src={img} alt={modelo} className="item-image" />
            <div className="item-details">
                <h3 className="item_model">{modelo}</h3>
                <p className="item-price">Precio: ${precio}</p>
            </div>
            <div className="detalle">
                <Link to={`/item/${modelo}`}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default Item;