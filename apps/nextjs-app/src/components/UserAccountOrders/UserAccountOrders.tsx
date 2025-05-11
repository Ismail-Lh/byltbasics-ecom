import useStripeOrders from "../../hooks/useStripeOrders";
import Loader from "../Loader/Loader";

/**
 * Renders the user's account orders.
 *
 * @returns JSX.Element
 */

function UserAccountOrders() {
  // const {
  //   orders,
  //   loading: ordersLoading,
  //   err: ordersError,
  // } = useStripeOrders();
  return (
    <div>
      <h2>recent orders</h2>
      {/* {orders.length === 0 ? (
              <p>you have not placed any order yet.</p>
            ) : (
              <>
                {ordersLoading ? (
                  <Loader message="please wait until your orders is loaded..." />
                ) : (
                  <>
                    {ordersError && <Alert error>{ordersError}</Alert>}
                    <h3>You have {orders.length} orders.</h3>
                    <UserOrders orders={orders} />
                  </>
                )}
              </>
            )} */}
    </div>
  );
}

export default UserAccountOrders;
