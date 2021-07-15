import dynamic from 'next/dynamic';

const AboutUsPageContainer = dynamic(() =>
  import('../../containers/AboutUsPageContainer/AboutUsPageContainer')
);

const AboutUsPage = () => {
  return <AboutUsPageContainer />;
};

export default AboutUsPage;
