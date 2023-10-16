
function NavBar() {
    return (
      <header className="navbar">
        <div className="company-name">
          <h1>Le Duo Délicieux 🍻</h1>
        </div>
        <div className="navbar-buttons">
          <button className="filter-button">Filtres</button>
          <button className="cart-button">Panier</button>
        </div>
      </header>
    );
  }
  
  export default NavBar;