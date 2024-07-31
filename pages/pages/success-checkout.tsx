import dynamic from "next/dynamic";
import React from "react";

const Layout = dynamic(() => import("../../components/Layout/Layout"));

const SuccessCheckoutPageContainer = dynamic(
  () =>
    import(
      "../../containers/SuccessCheckoutPageContainer/SuccessCheckoutPageContainer"
    ),
);

function SuccessCheckoutPage() {
  return (
    <Layout title="Checkout Success | BYLT Premium">
      <SuccessCheckoutPageContainer />
    </Layout>
  );
}

export default SuccessCheckoutPage;
