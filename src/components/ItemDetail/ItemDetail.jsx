import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ modelo, precio, img }) => {

    return (
        <div className="item-card">
            <img src={img} alt={modelo} className="item-image" />
            <div className="item-details">
                <h3 className="item_model">{modelo}</h3>
                <p className="item-price">Precio: ${precio}</p>
            </div>
            <div><ItemCount stock={10} initial={1} onAdd={(count) => console.log('Cantidad agregada: ', count)} /></div>
        </div>
    )
}

export default ItemDetail;