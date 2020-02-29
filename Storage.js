var fitnessArray=[];
function fitnessTracker(){
    var trainerPreference = {};
    if (document.getElementById('trainerpreferences').checked)
   {
    trainerPreference = document.getElementById('trainerpreferences').value;
   }
   if (trainerPreference == 'other') {
         trainerPreference = document.getElementById('other').value;
         alert(trainerPreference);
   } else {
        if(trainerPreference == 'trainerName'){
          trainerPreference = document.getElementById('trainerName').value;
          alert(trainerPreference);  
        }
   }
    var fitness={
        firstname:document.getElementById("firstname").value+" "+ document.getElementById("lastname").value,
        address:document.getElementById("streetadd").value,
        city:document.getElementById("city").value,
        phone:document.getElementById("phoneNo").value,
        package:document.getElementById("package").value,
        trainerpreference: trainerPreference
    };

    if(fitnessArray.firstname != "" && fitness.address != "" &&  fitness.city!= ""  && fitness.phone != "" && fitness.package!="" && fitness.trainerpreference!=""){
        fitnessArray = JSON.parse(localStorage.getItem("fitness")) || [];
        fitnessArray.push(fitness);
        localStorage.setItem("fitness",JSON.stringify(fitnessArray));

        window.open('../webpages/viewappointment.html');
    }
}
