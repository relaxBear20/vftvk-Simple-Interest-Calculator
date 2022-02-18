function compute() {
    let volume = document.getElementById("volume");
    let rate = document.getElementById("rate");
    let year = document.getElementById("year");
    let result = document.getElementById("result");
    const principle = document.getElementById("principal").value
    if (principle) {
        const amount = Number(principle);
        if (amount <= 0) {
            document.getElementById("principal").value = 0
            document.getElementById("principal").focus()
            alert("PLEASE ENTER POSITIVE AMOUNT")
            return
        }
        
    } else {
        alert("PLEASE ENTER AMOUNT")
        return
    }
    //
    rate.innerHTML = document.getElementById("slide").value + "%";
    year.innerHTML = Number(new Date().getFullYear()) + Number(document.getElementById("years").value);
    result.innerHTML = (Number(document.getElementById("slide").value) * Number(document.getElementById("years").value) * Number(document.getElementById("principal").value) + Number(document.getElementById("principal").value)).toFixed(2)
    volume.innerHTML = document.getElementById("principal").value;
}
var slide = document.getElementById('slide');


// slide.onchange = function() {
//     sliderDiv.innerHTML = this.value;
//     return true;
// }
function showVal(value) {
    let sliderDiv = document.getElementById("sliderAmount");
    sliderDiv.innerHTML = value + "%";
}

