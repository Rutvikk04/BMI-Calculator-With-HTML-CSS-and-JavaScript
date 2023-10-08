function Calculate() {
    let height = +(document.getElementById("height").value)
    let weight = +(document.getElementById("weight").value)

    let newHeight = ((height / 100) * 2);
    let result = (weight / newHeight)
    if (result < 0||result===null||result==="undefined") {
        document.getElementById("result").innerHTML = "Insufficient or Invalid Data";
        document.getElementById("status").innerHTML = "Insufficient or Invalid Data";
    }
    else {
        let status = (result <= 18.4) ? "UnderWeight" :
            (result >= 18.5 && result <= 24.9) ? "Normal" :
                (result >= 25.0 && result <= 39.9) ? "overWeight" :
                    (result >= 40) ? "obese" : "Insufficient Data"
        console.log(status)


        document.getElementById("result").innerHTML = Math.floor(result);
        document.getElementById("status").innerHTML = (status);
    }
}