var weight, height, age, gender, measure, bmi, error ;

        function calculate() {
            weight = parseFloat(document.getElementById("weight").value);
            height = parseFloat(document.getElementById("height").value);
            age = parseInt(document.getElementById("age").value);
            gender = document.getElementById("gender").value;
            error = "Please enter valid values";

            if (isNaN(weight) || isNaN(height) || isNaN(age)) {
                document.getElementById("results").innerHTML = error;
                return;
            }

            if (weight <= 0 || height <= 0) {
                document.getElementById("results").innerHTML = "Weight and height must be positive values";
                return;
            }

            height /= 100; // convert height to meters
            height *= height; // square the height

            bmi = weight / height;
            bmi = bmi.toFixed(1);

            if (bmi <= 18.4) {
                measure = "Your BMI is " + bmi + " which means you are Underweight";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                measure = "Your BMI is " + bmi + " which means you are Normal";
            } else if (bmi >= 25 && bmi <= 29.9) {
                measure = "Your BMI is " + bmi + " which means you are Overweight";
            } else {
                measure = "Your BMI is " + bmi + " which means you are Obese";
            }

            if (gender === "male") {
                if (age < 18) {
                    measure += ". This calculation is not suitable for males under 18 years old.";
                }
            } else {
                if (age < 18) {
                    measure += ". This calculation is not suitable for females under 18 years old.";
                }
            }

            document.getElementById("results").innerHTML = measure;
        }