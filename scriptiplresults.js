
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAox8bePNR3zOVb9_DzFfuGZ-RNBvV6AHs",
    authDomain: "sport-website-4.firebaseapp.com",
    databaseURL: "https://sport-website-4-default-rtdb.firebaseio.com",
    projectId: "sport-website-4",
    storageBucket: "sport-website-4.appspot.com",
    messagingSenderId: "820241638594",
    appId: "1:820241638594:web:1140cc340ae582950bc75b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('datavalue').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var year=getInputVal('year');
    readResults(year);
  }
  function getInputVal(id){
    return document.getElementById(id).value;
  }

    function readResults (year){
    var results=firebase.database().ref(year);
    results.on("value",(data) => {
    var ranks = data.val();
    var finalranks=ranks.toString().split(',');
    document.getElementById("result1").innerHTML="<br > 1."+finalranks[1];
    document.getElementById("result2").innerHTML="<br > 2."+finalranks[2];
    document.getElementById("result3").innerHTML="<br > 3."+finalranks[3];
  })
}
