
const firebaseConfig = {
      apiKey: "AIzaSyCHiD8ivwuOONPf0NV0n-Jk_N19OO0fNd4",
      authDomain: "class-test-b8b98.firebaseapp.com",
      databaseURL: "https://class-test-b8b98-default-rtdb.firebaseio.com",
      projectId: "class-test-b8b98",
      storageBucket: "class-test-b8b98.appspot.com",
      messagingSenderId: "415857514601",
      appId: "1:415857514601:web:f69b6ffd41bc26ab5c6af8",
      measurementId: "G-ZKDQ7Q7RXH"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";
function addRooms(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name -" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_room.html";

}
function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}