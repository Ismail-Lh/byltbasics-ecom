import { HeroImage } from '../../components';
import classes from './ImagesGridSection.module.scss';

const ImagesGridSection = () => {
  return (
    <div className={classes.image__grid}>
      <div className={classes.image__grid_1}>
        <HeroImage
          title='weekender pants'
          subtitle='a whole new level of premium.'
          position='right'
          color='#fff'
          route='/products/weekender-pant'
          imgUrlDesktop='hero-7.jpg'
        />
      </div>

      <div className={classes.image__grid_2}>
        <HeroImage
          title='everyday shoes'
          subtitle='step into premium.'
          position='right'
          color='#25293b'
          route='/products/everyday-shoes'
          imgUrlDesktop='hero-8.jpg'
        />
      </div>

      <div className={classes.image__grid_3}>
        <HeroImage
          title='the performance collection'
          subtitle='pushing the limits.'
          position='right'
          color='#25293b'
          route='/collections/performance-collection'
          imgUrlDesktop='hero-9.jpg'
        />
      </div>
    </div>
  );
};

export default ImagesGridSection;
