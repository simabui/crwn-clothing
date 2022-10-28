import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavagationContaner, NavLinkContainer, NavLink, LogoContainer } from "./navigation.styles.jsx";
import { selectCurrentUser } from "../../store/user/user.select";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavagationContaner>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropDown />}
      </NavagationContaner>
      <Outlet />
    </>
  );
}
