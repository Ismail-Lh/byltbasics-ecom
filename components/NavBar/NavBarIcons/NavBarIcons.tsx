import dynamic from "next/dynamic";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./NavBarIcons.module.scss";

import CartIcon from "../../../Icons/CartIcon";
import ContactIcon from "../../../Icons/ContactIcon";
import LoginIcon from "../../../Icons/LoginIcon";
import SearchIcon from "../../../Icons/SearchIcon";
import { useAuthContext } from "../../../contexts/auth_context";
import { useCartContext } from "../../../contexts/cart_context";
import MyLink from "../../MyLink/MyLink";

const DynamicSearchInput = dynamic(
  () => import("../../SearchInput/SearchInput"),
);

/**
 * Renders the icons for the navigation bar.
 * @returns JSX.Element
 */
function NavBarIcons() {
  const { openCart, total_products } = useCartContext();
  // const { user } = useAuthContext();
  const [openSearchInput, setOpenSearchInput] = useState(false);

  // const loginRoute = user ? "/account" : "/account/login";
  const loginRoute = "/account/login";

  const Icons = [
    { id: uuidv4(), icon: <ContactIcon />, route: "/pages/contact-us" },
    { id: uuidv4(), icon: <LoginIcon />, route: loginRoute },
    { id: uuidv4(), icon: <CartIcon />, cartIcon: true },
  ];

  return (
    <>
      <div
        className={classes.navbar__icons_1}
        style={{
          justifyContent: `${openSearchInput ? "flex-start" : "flex-end"}`,
        }}
      >
        {openSearchInput ? (
          <DynamicSearchInput closeSearchBar={setOpenSearchInput} />
        ) : (
          <>
            <button type="button" onClick={() => setOpenSearchInput(true)}>
              <SearchIcon />
            </button>

            {Icons.map(({ id, icon, route, cartIcon }) => (
              <MyLink
                route={route}
                key={id}
                handelClick={cartIcon ? openCart : () => {}}
              >
                {icon}
                {cartIcon && <span>{total_products}</span>}
              </MyLink>
            ))}
          </>
        )}
      </div>

      <button
        type="button"
        className={classes.navbar__icons_2}
        onClick={openCart}
      >
        <CartIcon />
        {total_products > 0 && <span>{total_products}</span>}
      </button>
    </>
  );
}

export default NavBarIcons;
