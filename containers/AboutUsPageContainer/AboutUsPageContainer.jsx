import classes from './AboutUsPageContainer.module.scss';

import { BackgroundImage } from '../../components';

const AboutUsPageContainer = () => {
  return (
    <div>
      <BackgroundImage imgSrc='about-us-bg.jpg' title='our story' />
      <div className='container'>
        <div className={classes.aboutUs}>
          {/* ------------------------------ */}
          <div className={classes.splitContent}>
            <div className={classes.text}>
              <h2 className={classes.title}>bylt for you</h2>
              <p>
                At BYLT, we’re bringing things back to the basics in a way like
                never before. Simply put. When it comes to your go-to basics,
                you deserve better. No more cheap throw-away tees that break
                down after one or two washes. The challenge? Finding something
                that offers that perfect fit tailored to your on-the-go
                lifestyle.
              </p>
              <p>
                Here to support life’s accomplishments, our tailored fits,
                elevated designs and enhanced materials are all key components
                to an upgraded life in premium style. Whether at the office, out
                with friends or hitting that next training session, you’re BYLT
                for any occasion.
              </p>
            </div>
            {/* ------------------------------ */}
            <div className={classes.splitContent__image}>
              <img
                src='/assets/about-us-split-content-img-1.jpg'
                alt='about-us-split-content-img-1'
              />
            </div>
          </div>
          {/* ------------------------------ */}
          <div className={classes.splitContent}>
            <div className={classes.splitContent__image}>
              <img
                src='/assets/about-us-split-content-img-2.jpg'
                alt='about-us-split-content-img-2'
              />
            </div>
            {/* ------------------------------ */}
            <div className={classes.text}>
              <h2 className={classes.title}>how it works</h2>
              {/* -------------------------- */}
              <div className={classes.content}>
                <div className={classes.img}>
                  <img src='/assets/sales.png' alt='sales' />
                </div>
                <p>
                  By skipping high-cost retailers, BYLT Basics™ can invest in
                  high quality without the price tag. Working directly with our
                  manufacturing partners allows us to spin and weave completely
                  unique fabrics.
                </p>
              </div>
              {/* -------------------------- */}
              <div className={classes.content}>
                <div className={classes.img}>
                  <img src='/assets/checkmark.png' alt='checkmark' />
                </div>
                <p>
                  Each of our garments undergoes a development process where
                  fabrics and technology merge. Fit, design, and material
                  selection is a key component to our design process. We've
                  developed new fabric technologies that have advanced comfort
                  and quality, so you can have longer-lasting basics.
                </p>
              </div>
              {/* -------------------------- */}
              <div className={classes.content}>
                <div className={classes.img}>
                  <img src='/assets/shipping.png' alt='shipping' />
                </div>
                <p>
                  Most orders will ship from our warehouse in 1-2 business days
                  after your purchase is made. We are so confident that you'll
                  fall in love with our products, but if you are not satisfied
                  with your experience, our customer support team is here to
                  help. Just email support@byltbasics.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPageContainer;
