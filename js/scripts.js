/*
window.onload = () => {
    let button = document.querySelector("#btn");

// Function for calculating akan names
    button.addEventListener("click", calculateAkanName);
};




function calculateAkanName() {
     // Getting input from user into date variable.
    Input is string so typecasting is necessary. //
    let date = parseInt(document
        .querySelector("#date").value);

        // Getting input from user into month variable.
    Input is string so typecasting is necessary. //
    let date = parseInt(document
        .querySelector("#month").value);

        // Getting input from user into year variable.
    Input is string so typecasting is necessary. //
    let gender = parseInt(document
        .querySelector("#year").value);
    

        let result = document.querySelector("#result");

     // Checking the user providing a proper
    // value or not
    if (date === "" || isNaN(date) || date <=0 || date > 31)) 
        result.innerHTML = "Provide a valid Date!";
  
        else if (month === "" || isNaN(weight || month <=0 || month > 12)) 
        result.innerHTML = "Provide a valid Month!";

         else if (year === "" || isNaN(year)) 
        result.innerHTML = "Provide a valid year!";
 
    // If both input is valid, calculate the A
    else {
    
         // calculating Ghanian name
        let ang =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
                           


    }
*/




window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}