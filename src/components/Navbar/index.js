import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import AuthSelectors from "../../pages/Authentication/selectors";
import { LoginActions } from "../../pages/Authentication/reducer";

const Navbar = () => {
  let history = useHistory();
  const [dropdownVisiblity, setDropDownVisiblity] = useState(false);
  const { userProfile } = useSelector(AuthSelectors);
  const dispatch = useDispatch();

  let location = useLocation();

  const handleLogout = () => {
    dispatch(LoginActions.logout());
    window.localStorage.removeItem("userProfile");
    history.push("/login");
  };

  const handleVisiblity = useCallback(() => {
    setDropDownVisiblity(true);
  }, []);

  const handleInvisiblity = useCallback(() => {
    setDropDownVisiblity(false);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__ul">
          <li className="navbar__li navbar__li--home">
            <Link to="/">
              {location.pathname === "/details" ? <h4>back</h4> : <h4>home</h4>}
            </Link>
          </li>
          <li className="navbar__li navbar__li--profile">
            <button
              onMouseEnter={handleVisiblity}
              onMouseLeave={handleInvisiblity}
            >
              <img src={userProfile?.profile_pic} alt="profile" />
              <h4>{userProfile?.username}</h4>
            </button>
          </li>
        </ul>
      </div>
      <div
        onMouseEnter={handleVisiblity}
        onMouseLeave={handleInvisiblity}
        className={`navbar__dropdown ${
          dropdownVisiblity && "navbar__dropdown--visible"
        }`}
      >
        <ul>
          <li>
            <button onClick={handleLogout}>
              <h4>Logout</h4>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
