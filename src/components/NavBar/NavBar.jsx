//import "./navbar.css";
import logo from '../../assets/logo_navbar.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <img src={logo} width="70" height="30" className="d-inline-block align-text-top" alt="logo de Syncro" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="nav-link active" to='/'>
                    <p>Home</p>
                </Link>
                <NavLink to={`/category/ainner`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Paletas Ainner</NavLink>
                <NavLink to={`/category/snauwaert`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Paletas Snauwaert</NavLink>
            </div>
            <CartWidget />
        </nav >
    )
}

export default NavBar;