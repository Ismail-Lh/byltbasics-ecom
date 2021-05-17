import classes from './SingleProductImages.module.scss';

const SingleProductImages = ({
  images,
  name,
  color,
  category,
  type,
  gender,
}) => {
  return (
    <div className={classes.singleProduct_images}>
      {images?.map((img, idx) => (
        <div key={idx}>
          <img
            src={`/assets/products/${gender}/${category}/${type}/${name}/${color}/large/${img}`}
            alt={`${name}-${color}`}
          />
        </div>
      ))}
    </div>
  );
};

export default SingleProductImages;

{
  /* <img
        src={`assets/products/men/${category}/${type}/${name}/${color}/large/${images[0]}`}
        alt={`${name}-${color}`}
      /> */
}
