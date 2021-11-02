import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, onSnapshot } from "firebase/firestore";
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
  /*db.collection("rooms")
  .doc(roomId)
  .collection("messages")
  .orderby("timestamp", "asc")
  .onSnapshot((snapshot) => setRoomMessages(snapshot.docs.map((x => x.data()))));
  //const channelRef = collection(db, "rooms");
  //onSnapshot(doc(db, "rooms", roomId, "messages", "message"), (x) => {
  //console.log(x);
  //})

  const channelsCollection = collection(db, "rooms");
 */ 
}

export { db, getChannelPromise, addChannelName, setRoomName };
