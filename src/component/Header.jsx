import React from "react";
import { useHistory } from "react-router-dom";

function Header(props) {
  const { currentlyActive } = props;
  const history = useHistory();
  return (
    <div>
      <nav className="navbar rounded">
        <div className="container-fluid">
          <span className="navbar-brand">Qsc Test automation</span>
          <ul className="nav nav-pills  justify-content-space">
            <li className="nav-item px-3">
              <button
                className={`nav-link ${
                  currentlyActive === "Execution" ? "active" : ""
                }`}
                onClick={() => history.push("/")}
              >
                Execution
              </button>
            </li>
            <li className="nav-item px-3">
              <buton
                className={`nav-link ${
                  currentlyActive === "Result" ? "active" : ""
                }`}
                onClick={() => history.push("/result")}
              >
                Result
              </buton>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
