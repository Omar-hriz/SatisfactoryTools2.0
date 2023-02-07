import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB5xqAHfWw8SwUhL5CX7-mteZ1fwx0qaRY",
  authDomain: "satisfactorytools-44611.firebaseapp.com",
  projectId: "satisfactorytools-44611",
  storageBucket: "satisfactorytools-44611.appspot.com",
  messagingSenderId: "1043047844281",
  appId: "1:1043047844281:web:60d6b5140d666c57dd0e68",
  measurementId: "G-E86R9GRMT8"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {

  getItems(callback) {
    const q = query(collection(db, 'Items'), orderBy('name', 'asc'))
    onSnapshot(q, snapshot => {
      let items = []
      snapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() })
      })
      callback(items)
    })
  }

}
