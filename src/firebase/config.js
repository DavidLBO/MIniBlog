
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB0lvtbHFQUS1SYMLIAA-cWSbC3HPvcpqw",
  authDomain: "miniblog-3f6b3.firebaseapp.com",
  projectId: "miniblog-3f6b3",
  storageBucket: "miniblog-3f6b3.appspot.com",
  messagingSenderId: "15180753581",
  appId: "1:15180753581:web:fd12b007e08680a72bf424"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};