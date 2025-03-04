import firebaseAcademia from "./firebaseConfig";
import {collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where
    } from 'firebase/firestore'

const db = getFirestore(firebaseAcademia);
export const readDataFirestore = async (path, child, value) => {
    const q = query(collection(db, path), where(child, "==", value))
    const querySnapshot = await getDocs(q)
    return querySnapshot
}