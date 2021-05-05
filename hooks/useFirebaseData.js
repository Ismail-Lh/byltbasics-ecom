import { useEffect, useState } from 'react';

import { useFirebaseContext } from '../contexts/firebase_context';

const useFirebaseData = gender => {
  const { firebase } = useFirebaseContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const firebaseData = async () => {
        setLoading(true);

        const res = firebase.firestore().collection(gender);

        const content = await res.get();

        const allData = content.docs.map(doc => ({
          ...doc.data(),
          docId: doc.id,
        }));

        setData(allData);

        setLoading(false);
      };

      firebaseData();

      // cleanup
      return () => {
        setData([]);
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { [gender]: data, loading };
};

export default useFirebaseData;
