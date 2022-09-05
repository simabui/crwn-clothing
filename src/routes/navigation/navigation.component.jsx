import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.styles.scss";

export default function Navigation() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  async function signOutHandler() {
    await signOutUser();
    setCurrentUser(null);
  }
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
