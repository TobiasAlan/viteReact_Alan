import firebaseAcademia from "./firebaseConfig";
import {getDatabase, get, ref, query, equalTo, orderByChild} from "firebase/database"
const db = getDatabase(firebaseAcademia);

export const readData = async (path, child, value) => {
    const user = query(
        ref(db, path),
        orderByChild(child),
        equalTo(value))
    return await get(user)
}