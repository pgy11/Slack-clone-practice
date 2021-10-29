import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import firebaseConfig from "./firebaseConf";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getChannelPromise(db) {
  const channelsCollection = collection(db, "rooms");
  const channelSnapshot = await getDocs(channelsCollection);
  const channelPromise = channelSnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
  }));

  return channelPromise;
}

export { db, getChannelPromise };