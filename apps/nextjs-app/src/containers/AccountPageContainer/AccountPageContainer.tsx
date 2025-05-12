import dynamic from "next/dynamic";

import classes from "./AccountPageContainer.module.scss";

const DynamicLoader = dynamic(() => import("../../components/Loader/Loader"));
const DynamicUserAccount = dynamic(
  () => import("../../components/UserAccount/UserAccount"),
);

/**
 * Renders the account page container component.
 *
 * @returns The JSX element representing the account page container.
 */

function AccountPageContainer() {
  // const { loading } = useAuthContext();

  const loading = false;

  return (
    <div className={classes.account__container}>
      {loading
        ? (
            <DynamicLoader message="please until your log out..." />
          )
        : (
            <DynamicUserAccount />
          )}
    </div>
  );
}

export default AccountPageContainer;
