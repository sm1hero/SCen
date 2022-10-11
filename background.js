import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";

function connectFireBase() {
    const firebaseConfig = {
        apiKey: "AIzaSyAUMnjrvqFEwxSd5NdoQ1Gy88vbrFrLxl4",
        authDomain: "scen-85df9.firebaseapp.com",
        projectId: "scen-85df9",
        storageBucket: "scen-85df9.appspot.com",
        messagingSenderId: "125805843761",
        appId: "1:125805843761:web:ebd9a81fa2598d775ccc10",
        measurementId: "G-W4W56PV60D"
    };
    return initializeApp(firebaseConfig);
}

function getDocumentNodesFromBody() {
    return document.body.childNodes;
}

function logData(data) {
    console.log(data);
}