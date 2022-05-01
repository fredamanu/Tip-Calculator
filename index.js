var billAmount = document.querySelector("#billAmount");
var tipAmount = document.querySelector("#tipAmount");
var tipWithAmount = document.querySelector("#tipWithAmount");
var tipPercentInput = document.querySelector("#customRange3").value;
var tipPercentOut = document.querySelector(".percent");

document.querySelector('#customRange3').addEventListener("click", function(){
document.querySelector('.percent').innerHTML = document.querySelector('#customRange3').value + "%";

});

document.addEventListener("keypress", function(e){
if(e.key === "Enter"){
compute();
}
});


function compute(){

  tipAmount.value = (document.querySelector('#customRange3').value/100) * billAmount.value;
  tipWithAmount.value = parseFloat(tipAmount.value) + parseFloat(billAmount.value);
  billAmount.value = "";
}
