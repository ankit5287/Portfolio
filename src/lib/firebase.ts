import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: 'studio-2152080363-64403',
  appId: '1:488100178373:web:34bbf569bb40163733c3ac',
  apiKey: 'AIzaSyC5SGdY20Ai1qlu9tYXS8NsNU1beev42Bk',
  authDomain: 'studio-2152080363-64403.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '488100178373',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
