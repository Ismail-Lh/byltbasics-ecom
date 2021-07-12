import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ imgAlt, imgSrc }) => (
  <LazyLoadImage
    alt={imgAlt}
    effect='blur'
    src={imgSrc}
    placeholderSrc={imgSrc}
  />
);

export default LazyImage;
