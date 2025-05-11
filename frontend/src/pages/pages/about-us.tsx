import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(() => import("../../components/Layout/Layout"));

const AboutUsPageContainer = dynamic(
  () => import("../../containers/AboutUsPageContainer/AboutUsPageContainer"),
);

/**
 * Renders the About Us page.
 * @returns JSX.Element representing the About Us page.
 */
function AboutUsPage() {
  return (
    <Layout title="Our Story | BYLT Premium">
      <AboutUsPageContainer />
    </Layout>
  );
}

export default AboutUsPage;
