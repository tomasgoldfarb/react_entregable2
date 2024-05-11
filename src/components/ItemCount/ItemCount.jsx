import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        if (count > 0 && count <= stock) {
            onAdd(count)
        }
    }

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span className="contador">{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;