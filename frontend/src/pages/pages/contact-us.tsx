import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(() => import("../../components/Layout/Layout"));

const ContactUsPageContainer = dynamic(
  () =>
    import("../../containers/ContactUsPageContainer/ContactUsPageContainer"),
);

function ContactUsPage() {
  return (
    <Layout title="Customer Support | BYLT Premium">
      <ContactUsPageContainer />
    </Layout>
  );
}

export default ContactUsPage;
