import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <>
            <h2>Lista de productos</h2>
            <div>
                {products.map(item => (
                    <Item key={item.modelo} {...item} />
                ))}
            </div>
        </>
    )
}

export default ItemList;