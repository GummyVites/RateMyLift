document.getElementById('submitButton').addEventListener('click', function() {
  var weightInputs = document.getElementById("weightInput").value;
  var liftType = document.getElementById("custom-select");
  var type = liftType.options[liftType.selectedIndex].value;
  var male = document.getElementById("male-checkbox").checked;
  var female = document.getElementById("female-checkbox").checked;
  var repMax = document.getElementById("maxLift").value;

  if(female == false && male == false){
    alert("Choose Gender");
  }

  if(type == ""){
    alert("Choose Lift")
  }

  if(weightInputs == ""){
    alert("Input weight")
  }

  if (repMax == "") {
    alert("Input One Rep Max")
  }

  checkGender(male,female,type,liftType,weightInputs,repMax);
});

function checkGender(male,female,type,liftType,weightInputs,repMax){
  if(male == true){
    malelifts(male,female,type,liftType,weightInputs,repMax);
  }else{
    femalelifts(male,female,type,liftType,weightInputs,repMax);
  }
}

function malelifts(male,female,type,liftType,weightInputs,repMax){
 if(type == 1){
   maleBenchpress(male,female,type,liftType,weightInputs,repMax);
 }else if (type == 2) {
   maleDeadlift(male,female,type,liftType,weightInputs,repMax);
 }else {
   maleSquats(male,female,type,liftType,weightInputs,repMax);
 }
}

function femalelifts(male,female,type,liftType,weightInputs,repMax){
  if(type == 1){
    femaleBenchpress(male,female,type,liftType,weightInputs,repMax);
  }else if (type == 2) {
    femaleDeadlift(male,female,type,liftType,weightInputs,repMax);
  }else {
    femaleSquats(male,female,type,liftType,weightInputs,repMax);
  }
 }

 function maleBenchpress(male,female,type,liftType,weightInputs,repMax){
   var results = repMax/weightInputs
   if (results<=.73) {
     alert("You are a Beginner")
   }else if (results>.73 && results<=1.2) {
     alert("You are a Novice")
   }else if (results>1.2 && results<=1.50) {
     alert("You are a Intermediate")
   }else if (results>1.50 && results <=2) {
     alert("You are Advanced")
   }else {
     alert("You are Elite")
   }
 }

 function maleDeadlift(male,female,type,liftType,weightInputs,repMax){
   var results = repMax/weightInputs
   if (results<=1.35) {
     alert("You are a Beginner")
   }else if (results>1.35 && results<=1.7) {
     alert("You are a Novice")
   }else if (results>1.7 && results<=2.2) {
     alert("You are a Intermediate")
   }else if (results>2.2 && results <=2.6) {
     alert("You are Advanced")
   }else {
     alert("You are Elite")
   }
 }

 function maleSquats(male,female,type,liftType,weightInputs,repMax){
   var results = repMax/weightInputs
   if (results<=.83) {
     alert("You are a Beginner")
   }else if (results>.83 && results<=1.5) {
     alert("You are a Novice")
   }else if (results>1.5 && results<=2) {
     alert("You are a Intermediate")
   }else if (results>2 && results <=2.5) {
     alert("You are Advanced")
   }else {
     alert("You are Elite")
   }
 }

 function femaleBenchpress(male,female,type,liftType,weightInputs,repMax){
   var results = repMax/weightInputs
   if (results<=.28) {
     alert("You are a Beginner")
   }else if (results>.28 && results<=.7) {
     alert("You are a Novice")
   }else if (results>.7 && results<=1) {
     alert("You are a Intermediate")
   }else if (results>1 && results <=1.5) {
     alert("You are Advanced")
   }else {
     alert("You are Elite")
   }
 }

 function femaleDeadlift(male,female,type,liftType,weightInputs,repMax){
   var results = repMax/weightInputs
   if (results<=.55) {
     alert("You are a Beginner")
   }else if (results>.55 && results<=1.2) {
     alert("You are a Novice")
   }else if (results>1.2 && results<=1.7) {
     alert("You are a Intermediate")
   }else if (results>1.7 && results <=2.3) {
     alert("You are Advanced")
   }else {
     alert("You are Elite")
   }
 }

 function femaleSquats(male,female,type,liftType,weightInputs,repMax){
   var results = repMax/weightInputs
   if (results<=.45) {
     alert("You are a Beginner")
   }else if (results>.45 && results<=1.2) {
     alert("You are a Novice")
   }else if (results>1.2 && results<=1.6) {
     alert("You are a Intermediate")
   }else if (results>1.6 && results <=2.2) {
     alert("You are Advanced")
   }else {
     alert("You are Elite")
   }
 }
