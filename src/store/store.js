import { defineStore } from 'pinia';
import { db } from '@/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';


export const useStore = defineStore('admin', () => {
  const fetchNews = async () => {
    const querySnapshot = await getDocs(collection(db, 'news'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };

  const addNews = async (news) => {
    const docRef = await addDoc(collection(db, 'news'), news);
    return { id: docRef.id, ...news };
  };

  const updateNews = async (news) => {
    await updateDoc(doc(db, 'news', news.id), {
      text: news.name,
      title: news.desc,
    });
  };

  const deleteNews = async (id) => {
    await deleteDoc(doc(db, 'news', id));
  };

  return {
    fetchNews,
    addNews,
    updateNews,
    deleteNews,
  };
});
