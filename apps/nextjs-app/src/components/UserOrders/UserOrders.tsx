import { formatPrice } from "../../utils/helpers";
import classes from "./UserOrders.module.scss";

type UserOrdersProps = {
  orders: {
    docId: string;
    images: string[];
    timestamp: string;
    amount: number;
    amount_shipping: number;
    stripe_info: { quantity: number }[];
  }[];
};

/**
 * Renders a list of user orders.
 *
 * @param {UserOrdersProps} props - The component props.
 * @param {Order[]} props.orders - The array of user orders.
 * @returns {JSX.Element} The rendered component.
 */

function UserOrders({ orders }: UserOrdersProps): JSX.Element {
  return (
    <div className={classes.orders}>
      {orders?.map(
        ({
          docId,
          images,
          timestamp,
          amount,
          amount_shipping,
          stripe_info,
        }) => (
          <div className={classes.order} key={docId}>
            <div className={classes.order__header}>
              <div className={classes.order__id}>
                <p className={classes.paragraph}>
                  <span>order id:</span>
                  {" "}
                  {docId}
                </p>
              </div>

              <div className={classes.order__header_grid}>
                <div className={classes.order__date}>
                  <h3>order placed</h3>
                  <p>{timestamp}</p>
                </div>

                <div className={classes.order__total}>
                  <h3>total amount</h3>
                  <p className={classes.paragraph}>
                    {formatPrice(amount)}
                    {" "}
                    -
                    <span>next day delivery</span>
                    {" "}
                    {formatPrice(amount_shipping)}
                  </p>
                </div>

                <div className={classes.order__items}>
                  <h3>total products</h3>
                  <p className={classes.paragraph}>
                    {stripe_info
                      .map(({ quantity }) => quantity)
                      .reduce((acc, curr) => acc + curr, 0)}
                    {" "}
                    <span>products</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.order__products}>
              {images.map((imgSrc, idx) => (
                <div className={classes.order__products_images} key={imgSrc}>
                  <img src={imgSrc} alt={imgSrc} className={classes.img} />
                  <p>
                    product qty:
                    {stripe_info[idx].quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default UserOrders;
