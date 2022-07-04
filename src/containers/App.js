import { Link, Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-3">
        <div className="container-fluid">
          <Link className='navbar-brand' to="/">Gardener's Companion</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/new_plant">New Plant</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <br />
      <footer className='py-3 text-center bg-light mt-auto'>
        Garden Companion - 2022 by <a href='https://instagrom.com/studioriva'>Connor Riva</a>
      </footer>
    </div>
  );
}

export default App;
