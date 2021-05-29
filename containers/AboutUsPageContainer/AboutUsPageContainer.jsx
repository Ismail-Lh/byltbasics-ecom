import classes from './AboutUsPageContainer.module.scss';

import { BackgroundImage } from '../../components';

const AboutUsPageContainer = () => {
  return (
    <div>
      <BackgroundImage imgSrc='about-us-bg.jpg' title='our story' />
      <div className='container'>
        <div className={classes.aboutUs}>
          <div className={classes.splitContent_1}>
            <div className={classes.splitContent_1__text}>
              <h2 className={classes.splitContent__title}>bylt for you</h2>
              <p className={classes.splitContent_1__text_1}>
                At BYLT, we’re bringing things back to the basics in a way like
                never before. Simply put. When it comes to your go-to basics,
                you deserve better. No more cheap throw-away tees that break
                down after one or two washes. The challenge? Finding something
                that offers that perfect fit tailored to your on-the-go
                lifestyle.
              </p>
              <p className={classes.splitContent_1__text_2}>
                Here to support life’s accomplishments, our tailored fits,
                elevated designs and enhanced materials are all key components
                to an upgraded life in premium style. Whether at the office, out
                with friends or hitting that next training session, you’re BYLT
                for any occasion.
              </p>
            </div>

            <div className={classes.splitContent__image}>
              <img
                src='/assets/about-us-split-content-img-1.jpg'
                alt='about-us-split-content-img-1'
              />
            </div>
          </div>

          <div className={classes.splitContent_2}>
            <div className={classes.splitContent_2__text}>
              <h2 className={classes.splitContent__title}>bylt for you</h2>
            </div>

            <div className={classes.splitContent__image}>
              <img
                src='/assets/about-us-split-content-img-1.jpg'
                alt='about-us-split-content-img-1'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageContainer;
