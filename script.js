function compute()
{
    let volume = document.getElementById("volume");
    let rate = document.getElementById("rate");
    let year = document.getElementById("year");
    let result = document.getElementById("result");

    //
    console.log(document.getElementById("years").value);
    rate.innerHTML =   document.getElementById("slide").value + "%";
    year.innerHTML = Number(new Date().getFullYear()) +  Number(document.getElementById("years").value);
    result.innerHTML = (Number(document.getElementById("slide").value)*Number(document.getElementById("years").value)*Number(document.getElementById("principal").value) + Number(document.getElementById("principal").value)).toFixed(2)
    volume.innerHTML =  document.getElementById("principal").value;
}
var slide = document.getElementById('slide');
    

// slide.onchange = function() {
//     sliderDiv.innerHTML = this.value;
//     return true;
// }
function showVal(value) {
    let sliderDiv = document.getElementById("sliderAmount");
    console.log(sliderDiv);
    sliderDiv.innerHTML = value+"%";
}