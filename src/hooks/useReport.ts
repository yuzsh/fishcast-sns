import * as firebase from 'firebase';

export function useReport() {

  const config = {
      apiKey: "AIzaSyDHRZk-tSf9ObQBQi18108nPW5-wfZMY1E",
      authDomain: "fishcast-sns.firebaseapp.com",
      databaseURL: "https://fishcast-sns.firebaseio.com",
      projectId: "fishcast-sns",
      storageBucket: "fishcast-sns.appspot.com",
      messagingSenderId: "815974536448",
      appId: "1:815974536448:web:0007ad15d06a7e35244fe5",
      measurementId: "G-QWXQRK4ERZ"
  };
    
  const getReport = async () => {
    firebase.initializeApp(config);
    const db = firebase.firestore();
    // const settings = { timestampsInSnapshots: true };
    // db.settings(settings);
    
    const docRef = db.collection("gallery").doc("testDoc");
    const doc = await docRef.get()
    console.log(doc.data())
  };

  return {
    getReport
  };
}