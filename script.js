
        // Get DOM elements
        let but = document.getElementById("button");
        let res = document.getElementById("result");
        
        // Add click event listener to button
        but.addEventListener("click", function() {
            let r = document.getElementById("res1");
            let i = document.getElementById("height").value;
            let i2 = document.getElementById("weight").value;
            
            // Calculate BMI
            let bmi = i2 / Math.pow(i, 2) * 10000;
            let bmivalue = parseFloat(bmi.toFixed(2));
            
            // Display BMI result
            res.textContent = "Your BMI: " + bmivalue;
            
           
            // Determine BMI category
            if (bmivalue < 18.5) {
                r.textContent = "UnderWeight";
                r.style.color = "black";
            }
            else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
                r.textContent = "Normal & Healthy";
                r.style.color = "yellow";
            }
            else if (bmivalue >= 25 && bmivalue <= 29.9) {
                r.textContent = "Overweight";
                r.style.color = "red";
            }
        });
    