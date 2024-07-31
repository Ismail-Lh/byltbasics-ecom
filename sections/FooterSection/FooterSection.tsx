import dynamic from "next/dynamic";

const FooterFormContainer = dynamic(
  () => import("../../containers/FooterFormContainer/FooterFormContainer"),
);
const FooterLinksContainer = dynamic(
  () => import("../../containers/FooterLinksContainer/FooterLinksContainer"),
);

/**
 * Renders the footer section of the website.
 * This component includes a container with the footer form and footer links.
 */
function FooterSection() {
  return (
    <div className="container">
      <FooterFormContainer />
      <FooterLinksContainer />
    </div>
  );
}

export default FooterSection;
