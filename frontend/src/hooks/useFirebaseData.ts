import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

import { db } from "../lib/firebase.prod";
import type { Gender } from "../types";

const useFirebaseData = (gender: Gender) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    try {
      const firebaseData = async () => {
        setLoading(true);

        const res = await getDocs(collection(db, gender));

        const allData = res.docs.map((doc) => ({
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
