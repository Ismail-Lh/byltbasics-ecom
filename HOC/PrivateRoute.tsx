import { type NextRouter, useRouter } from "next/router";
import { useAuthContext } from "../contexts/auth_context";

type PrivateRouteProps = {
  [key: string]: unknown;
};

function PrivateRoute(
  Component: React.FC<PrivateRouteProps>,
): React.FC<PrivateRouteProps> {
  return (props: PrivateRouteProps) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router: NextRouter = useRouter();

      // If there is no user redirect to "/account/login" page.
      // if (!user) {
      //   Router.push("/account/login");
      //   return null;
      // }

      // If this is an user we just render the component that was passed with all its props
      return <Component {...props} />;
    }

    // If we are on server, return null
    return null;
  };
}

export default PrivateRoute;
