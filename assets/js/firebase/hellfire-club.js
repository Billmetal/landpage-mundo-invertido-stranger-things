import firebase from "./app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

export async function subscribeToHellFireClub(subscription) {
    const db = getFirestore(firebase.app);
    const hellfireCollection = collection(db, "hellfire-clube");
    const docRef = await addDoc(hellfireCollection, subscription);
};