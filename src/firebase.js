import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot, orderBy, query  } from "firebase/firestore";
import firebaseConfig from "./firebaseConf";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function getChannelPromise() {
  const channelsCollection = collection(db, "rooms");
  const channelSnapshot = await getDocs(channelsCollection);
  const channelPromise = channelSnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
  }));
  return channelPromise;
}

async function addChannelName(channelName) {
  const channelsCollection = collection(db, "rooms");
  await addDoc(channelsCollection, {
    name: channelName,
  });
}

function setRoomName(roomId, setRoomDetails) {
  onSnapshot(doc(db, "rooms", roomId), (x) => {
    setRoomDetails(x.data());
  });
}

async function loadMessage(roomId, setRoomMessages) {
  const channelsCollection = collection(db, "rooms", roomId, "messages");
  const q = query(channelsCollection, orderBy("timestamp", "asc"));
  const querySnapshot = await getDocs(q);
  const arr = []
  querySnapshot.forEach(x => {
    arr.push(x.data());
  })
  setRoomMessages(arr);
}

export { db, getChannelPromise, addChannelName, setRoomName, loadMessage };
