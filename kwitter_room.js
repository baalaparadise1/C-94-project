const firebaseConfig = {
      apiKey: "AIzaSyAXZisKB_Ak0hiC1ltgSGVrwo2REZqgcuo",
      authDomain: "classtest-7a182.firebaseapp.com",
      projectId: "classtest-7a182",
      storageBucket: "classtest-7a182.appspot.com",
      messagingSenderId: "87043781802",
      appId: "1:87043781802:web:695602fe6d4bda425b4cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
