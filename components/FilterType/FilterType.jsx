import { useFiltersContext } from '../../contexts/filters_context';

const FilterType = ({ type, title }) => {
  const { filtered_products: products } = useFiltersContext();

  const filtersValue = [
    'all',
    ...new Set(products.map(product => product[type])),
  ];

  console.log(filtersValue);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {filtersValue.map((value, idx) => (
          <p key={idx}>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default FilterType;
