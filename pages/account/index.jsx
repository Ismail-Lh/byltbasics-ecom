import { useState, useEffect } from 'react';
import moment from 'moment';

import PrivateRoute from '../../HOC/PrivateRoute';
import { useAuthContext } from '../../contexts/auth_context';
import { useFirebaseContext } from '../../contexts/firebase_context';

import { AccountPageContainer } from '../../containers';

const AccountPage = () => {
  const useStripeOrders = () => {
    const { user } = useAuthContext();
    const { firebase } = useFirebaseContext();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');

    if (!user) return;

    useEffect(() => {
      try {
        const firebaseOrders = async () => {
          setLoading(true);

          const res = firebase
            .firestore()
            .collection('users')
            .doc(user.email)
            .collection('orders')
            .orderBy('timestamp', 'desc');

          const content = await res.get();

          const allOrders = content.docs.map(doc => ({
            ...doc.data(),
            timestamp: moment(doc.data().timestamp.toDate()).unix(),
            docId: doc.id,
          }));

          setOrders(allOrders);

          setLoading(false);
        };

        firebaseOrders();

        // cleanup
        return () => {
          setData([]);
        };
      } catch (error) {
        setErr(error.message);
      }
    }, []);

    return { orders, loading, err };
  };

  const { orders, loading, err } = useStripeOrders();

  return <AccountPageContainer orders={orders} loading={loading} error={err} />;
};

export default PrivateRoute(AccountPage);
