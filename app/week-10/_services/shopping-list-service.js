import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc, doc,getDoc } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  try{
    // Reference: users/{userId}/items
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
      console.log("Document id:", items[0].id);
    });
  } catch (error) {
      console.log("Error getting items:",error);
   }

  return items;
}

export async function addItem(userId, item) {
  try{
    // Reference: users/{userId}/items
    const itemsRef = collection(db, "users", userId, "items");
    const newItemPromise = await addDoc(itemsRef, item);

    return newItemPromise.id;
  } catch (error) {
      console.log("Error adding item:",error);
   }
  
}


export async function deleteItem(userId, itemId) {

  try {
    const item = await getItemById(userId, itemId);
    // Reference: users/{userId}/items/{itemId}
    const itemRef = doc(db, "users", userId, "items", item.id);
    await deleteDoc(itemRef);

    console.log("Deleted item:", itemId);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}

export async function getItemById(userId, itemId) {
  try {
    // Reference: users/{userId}/items/{itemId}
    const itemRef = doc(db, "users", userId, "items", itemId);
    const documentSnapshot = await getDoc(itemRef);
    
    if (documentSnapshot.exists()) {
      return {
        id: documentSnapshot.id,
        ...documentSnapshot.data()
      };
    }
    return null;
  } catch (error) {
    console.error("Error getting item:", error);
    return null;
  }
}