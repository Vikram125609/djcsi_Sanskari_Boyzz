importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDSL_onN8bqoMJtp5L-xGpQntsZdFyllW4",
    authDomain: "pushnotifications-74ea4.firebaseapp.com",
    projectId: "pushnotifications-74ea4",
    storageBucket: "pushnotifications-74ea4.appspot.com",
    messagingSenderId: "725501041476",
    appId: "1:725501041476:web:cf6e794ff5e254b8df5511"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});