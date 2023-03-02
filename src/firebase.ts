import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyALlH000ZIZi9Nsq0waFBNWGlA2oHL-jk4',
  authDomain: 'phonecatalog-ca139.firebaseapp.com',
  projectId: 'phonecatalog-ca139',
  storageBucket: 'phonecatalog-ca139.appspot.com',
  messagingSenderId: '1051159177791',
  appId: '1:1051159177791:web:b987ca86afcba23e82e68a',
  measurementId: 'G-HE0TXP06M3',
};

export const app = initializeApp(firebaseConfig);
