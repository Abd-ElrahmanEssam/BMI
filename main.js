const button = document.getElementById("btn");
let bmi_result = document.getElementById("bmi-result");
let weight_condition = document.getElementById("weight-condition");

button.addEventListener("click",ComputeBMI);

function ComputeBMI(){
let height = document.getElementById("height").value/100;
let weight = document.getElementById("weight").value;
let result = weight / (height * height);

bmi_result.value= result;

if(bmi_result.value < 18.5){
weight_condition.innerHTML="Under weight"; 
}

else if(bmi_result.value >= 18.5 && bmi_result.value < 25.0 ){
weight_condition.innerHTML="Normal weight"; 
}

else if(bmi_result.value >= 25.0 && bmi_result.value < 30.0 ){
weight_condition.innerHTML="Over weight"; 
}

else{
weight_condition.innerHTML="Obese"; 
}
}
