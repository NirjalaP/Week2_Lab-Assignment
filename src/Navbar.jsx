import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <Link to="/" className="navbar-brand">🛍️ Shop</Link>
      <Link to="/cart" className="btn btn-outline-primary">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;