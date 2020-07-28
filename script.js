
function check() {
    // declaring variables
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inches").value);
    let weight = parseInt(document.getElementById("weight").value);
    // condition for checking the input and proceed
    if ((feet < 8 && feet > 0) && (inches < 12 && inches >= 0) && (weight > 0 && weight != 0)) {
        let meters = (feet / 3.28) + (inches * 0.0254);
        let height = meters * meters
        let bmi = parseFloat(weight / height);
        let myBmi = bmi.toFixed(1);
        document.getElementById("result").innerText = "Your BMI is  " + myBmi;
        // for checking your category 
        if (myBmi < 18.5) {
            document.getElementById("r-statement").innerText = "You're considered Underweight"
        }
        else if (myBmi >= 18.5 && myBmi <= 24.9) {
            document.getElementById("r-statement").innerText = "You're considered Normal "
        }
        else {
            document.getElementById("r-statement").innerText = "You're considered Overweight"
        }
    }
    // if  input height is invalid
    else if (feet > 8 || feet <= 0) {
        document.getElementById("ft-error").innerText = "Please Enter Valid Height in Feet";
    }
    else if (inches > 12 || inches < 0) {
        document.getElementById("inch-error").innerText = "Please Enter Valid Height in Inches";
    }
    // if input weight is invalid
    else if (weight <= 0) {
        document.getElementById("weight-error").innerText = "Please Enter Valid Weight in Kilograms";
    }

    else {
        alert("You have not entered any input");
    }

}