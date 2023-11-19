import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined">menu</span>
          <span className="tooltip-text">Main menu</span>
        </div>

        <img
          className="gb_Dc gb_Dd"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
          role="presentation"
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area">
        <div className="tooltip">
          <span className="tooltip-text">Search</span>
        </div>
        <span className="material-symbols-outlined hover">search</span>
        <span className="material-icons-outlined hover">Search</span>
        <input type="text" />
      </div>

      <div className="settings-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">view_agenda</span>
          <span className="tooltip-text">List View</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <span className="material-symbols-outlined hover">apps</span>
        <span className="tooltip-text">Google Apps</span>
        <span className="material-symbols-outlined hover">person</span>
        <span className="tooltip-text">Account</span>
      </div>
    </nav>
  );
}

export default Navbar;
