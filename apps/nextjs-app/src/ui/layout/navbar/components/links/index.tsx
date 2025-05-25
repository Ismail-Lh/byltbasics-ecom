import Link from "next/link";

import { NavLinksData } from "../../constants";
import styles from "./styles.module.scss";

/**
 * Renders the navigation links for the navbar.
 * @returns JSX.Element
 */
export function NavbarLinks() {
  // const { openSidebar } = useProductsContext();
  // const { updateCollection } = useFiltersContext();

  // const [showMenDropMenu, setShowMenDropMenu] = useState(false);
  // const [showWomenDropMenu, setShowWomenDropMenu] = useState(false);

  // const handelHover = (link: string, state: boolean) => {
  //   link === "men" && setShowMenDropMenu(state);
  //   link === "women" && setShowWomenDropMenu(state);
  // };

  // const handelClick = (link: string) => {
  //   link === "men" && updateCollection("shop-men", "all men");
  //   link === "women" && updateCollection("shop-women", "all women");
  //   link === "bundles" && updateCollection("bundles", "bundles");
  //   link === "last call" && updateCollection("sales", "last call");
  // };

  return (
    <>
      <ul className={styles.navbar__list}>
        {NavLinksData.map(({ id, link, route }) => (
          <li
            className={styles.navbar__links}
            key={id}
            // onClick={(e) => {
            //   e.stopPropagation();
            //   handelClick(link);
            // }}
            // onMouseEnter={(e) => {
            //   e.stopPropagation();
            //   handelHover(link, true);
            // }}
            // onMouseLeave={(e) => {
            //   e.stopPropagation();
            //   handelHover(link, false);
            // }}
          >
            <Link href={`/collections/${route}`}>{link}</Link>

            {/* {link === "men" && showMenDropMenu && (
              <DynamicDropDownMenu
                collections={menCollections}
                productsCategories={menCategories}
                imageInfo={{
                  imgUrl: "men-drop-down-img.jpg",
                  route: "/collections/spring-collection",
                  subtitle: "shop the latest styles",
                  title: "gear up for summer",
                }}
              />
            )}

            {link === "women" && showWomenDropMenu && (
              <DynamicDropDownMenu
                collections={womenCollections}
                productsCategories={womenCategories}
                imageInfo={{
                  imgUrl: "women-drop-down-img.jpg",
                  route: "/products/womens-elite-joggers",
                  subtitle: "ultimate comfort. premium style.",
                  title: "women's elite + joggers",
                }}
              />
            )} */}
          </li>
        ))}
      </ul>
      {/* <div className={styles.menu__icon}>
        <button type="button" onClick={openSidebar}>
          <MenuIcon />
        </button>
      </div> */}
    </>
  );
}
