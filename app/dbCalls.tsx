
import { newParticipant, Participant } from './types'
import { doc, query, deleteDoc, collection, addDoc, onSnapshot, DocumentData, QueryDocumentSnapshot } from "firebase/firestore"; 
import { db } from "./firebase"

export const deleteParticipant = async (id: string) => {
    const docRef = doc(db, 'participants', id); // Assuming id is the document ID
    await deleteDoc(docRef);
  };
 
 export const addParticipant = async(e: React.FormEvent<HTMLButtonElement>, payload: newParticipant) => {
          const docRef = await addDoc(collection(db, "participants"), payload);
          console.log("Participant added with ID: ", docRef.id);
  }

  export const listenToParticipants = (callback: (participants: Participant[]) => void) => {
    const q = query(collection(db, 'participants'));
    const unsubscribe = onSnapshot(q, (querySnapshot: DocumentData) => {
      let participantArr: Participant[] = [];
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        participantArr.push({
          id: doc.id,
          name: doc.data().name,
          score: Number(doc.data().score)
        });
      });
      callback(participantArr);
    });
    return unsubscribe;
  };