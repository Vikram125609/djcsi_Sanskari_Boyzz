import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging"
const firebaseConfig = {
    apiKey: "AIzaSyDSL_onN8bqoMJtp5L-xGpQntsZdFyllW4",
    authDomain: "pushnotifications-74ea4.firebaseapp.com",
    projectId: "pushnotifications-74ea4",
    storageBucket: "pushnotifications-74ea4.appspot.com",
    messagingSenderId: "725501041476",
    appId: "1:725501041476:web:cf6e794ff5e254b8df5511"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);