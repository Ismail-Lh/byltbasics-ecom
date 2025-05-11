import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../../components/Layout/Layout"));

const LoginPageContainer = dynamic(
  () => import("../../containers/LoginPageContainer/LoginPageContainer"),
);

/**
 * Renders the login page.
 * @returns JSX.Element representing the login page.
 */
function LoginPage() {
  return (
    <Layout title="Login | BYLT Premium">
      <LoginPageContainer />
    </Layout>
  );
}

export default LoginPage;
