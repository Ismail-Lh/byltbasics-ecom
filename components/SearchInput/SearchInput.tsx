import { useState } from "react";
import CloseIcon from "../../Icons/CloseIcon";
import { useProductsContext } from "../../contexts/products_context";
import type { Product } from "../../types";
import MyLink from "../MyLink/MyLink";
import classes from "./SearchInput.module.scss";

type searchInputProps = {
  closeSearchBar: (arg: boolean) => void;
};

/**
 * Renders a search input component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.closeSearchBar - The function to close the search bar.
 * @returns {JSX.Element} The search input component.
 */
function SearchInput({ closeSearchBar }: searchInputProps): JSX.Element {
  const { men_products, women_products, getSingleProduct } =
    useProductsContext();

  const allProducts = [...men_products, ...women_products];

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const handelSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    setSearchValue(searchWord);

    const newFilter = allProducts.filter(({ name }) =>
      name.toLowerCase().includes(searchWord.toLowerCase()),
    );

    if (searchWord === "") setFilteredProducts([]);
    else setFilteredProducts(newFilter);
  };

  const handelClick = (id: string, gender: string, color: string) => {
    setFilteredProducts([]);
    setSearchValue("");
    getSingleProduct({ productId: id, color, gender });
  };

  return (
    <div className={classes.search}>
      <div className={classes.search__input}>
        <input
          type="text"
          placeholder="search"
          value={searchValue}
          onChange={handelSearch}
        />

        <button type="button" onClick={() => closeSearchBar(false)}>
          <CloseIcon />
        </button>
      </div>

      {filteredProducts.length !== 0 && (
        <div className={classes.search__results}>
          {filteredProducts
            .slice(0, 10)
            .map(({ name, id, route, gender, colors }) => (
              <div
                key={id}
                onClick={() => handelClick(id, gender, colors[0])}
                className={classes.result}
              >
                <MyLink
                  key={id}
                  route={`/products/${route}/?gender=${gender}&id=${id}`}
                >
                  {name}
                </MyLink>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
