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
   var results = 
 }

 function maleDeadlift(male,female,type,liftType,weightInputs,repMax){

 }

 function maleSquats(male,female,type,liftType,weightInputs,repMax){

 }

 function femaleBenchpress(male,female,type,liftType,weightInputs,repMax){

 }

 function femaleDeadlift(male,female,type,liftType,weightInputs,repMax){

 }

 function femaleSquats(male,female,type,liftType,weightInputs,repMax){

 }
