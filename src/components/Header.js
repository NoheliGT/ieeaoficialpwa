import React from "react";
import { Link } from "react-router-dom";
import transitions from "bootstrap";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <img
                          src="https://telegra.ph/file/6f9f0a9d3bf3c2dd05484.png"
                          alt="logo"
                          style={{
                            width: "100px",
                            height: "100px",
                            marginTop: "4px",
                            marginLeft: "-25px"
                          }}
                        />
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "principal" ? "active" : ""
                    }`}
                    onClick={() => setActive("principal")}
                  >
                    INICIO
                  </li>
                </Link>
                <Link to="/conocenos" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "conocenos" ? "active" : ""
                    }`}
                    onClick={() => setActive("conocenos")}
                  >
                    CONOCENOS
                  </li>
                </Link>
                <Link to="/ofertaeducativa" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "ofertaeducativa" ? "active" : ""
                    }`}
                    onClick={() => setActive("ofertaeducativa")}
                  >
                    OFERTA EDUCATIVA
                  </li>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "blogs" ? "active" : ""
                    }`}
                    onClick={() => setActive("blogs")}
                  >
                    EVENTOS
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        />
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user?.displayName}
                      </p>
                      <Link to="/create" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}
                  >
                    NUEVA PUBLICACIÓN
                  </li>
                </Link>
                      <li className="nav-item nav-link" onClick={handleLogout}>
                        CERRAR SESIÓN
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        onClick={() => setActive("login")}
                      >
                        INICIAR SESIÓN
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
