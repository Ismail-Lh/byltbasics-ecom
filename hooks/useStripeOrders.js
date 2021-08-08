import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { useAuthContext } from '../contexts/auth_context';
import { useFirebaseContext } from '../contexts/firebase_context';

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
          timestamp: format(
            doc.data().timestamp.toDate(),
            'do MMM yyy - HH:mm:ss a'
          ),
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

export default useStripeOrders;
