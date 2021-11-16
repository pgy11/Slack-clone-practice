import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import firebaseConfig from "./firebaseConf";

const firebaseApp = initializeApp(firebaseConfig);
firebaseApp.automaticDataCollectionEnabled = true;
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

async function getChannelPromise() {
  const channelsCollection = collection(db, "rooms");
  const q = query(channelsCollection, orderBy("timestamp", "asc"));
  const querySnapshot = await getDocs(q);
  const channelPromise = querySnapshot.docs.map((item) => ({
    id: item.id,
    name: item.data().name,
  }));
  return channelPromise;
}

async function addChannelName(channelName) {
  const channelsCollection = collection(db, "rooms");
  await addDoc(channelsCollection, {
    name: channelName,
    timestamp: serverTimestamp(),
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
  const arr = [];
  querySnapshot.forEach((x) => {
    arr.push(x.data());
  });
  setRoomMessages(arr);
}

async function submitMessage(roomId, input, user) {
  await addDoc(collection(db, "rooms", roomId, "messages"), {
    message: input,
    timestamp: serverTimestamp(),
    user: user.displayName,
    userimage: user.photoURL
  });
}

export {
  db,
  getChannelPromise,
  addChannelName,
  setRoomName,
  loadMessage,
  auth,
  provider,
  submitMessage
};
