import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
    return (
   <div className="cart collapse navbar-collapse" id="navbarSupportedContent">
    <FontAwesomeIcon icon={faCartShopping} />
    0
    </div>
    )
}
export default CartWidget;