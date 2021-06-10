
window.onload = () => {
    let button = document.querySelector("#btn");

// Function for calculating akan names
    button.addEventListener("click", calculateAkaneName);
};


function calculateAkaneName() {
     // Getting input from user into date variable.
   // Input is string so typecasting is necessary.  //
    let date = parseInt(document
        .querySelector("#date").value);

        // Getting input from user into month variable.
   // Input is string so typecasting is necessary. //
    let month = parseInt(document
        .querySelector("#month").value);

        // Getting input from user into year variable.
    let century = parseInt(document
        .querySelector("#century").value); 
        
        // Getting input from user into year variable.
    //Input is string so typecasting is necessary. //
    let digit = parseInt(document
        .querySelector("#digit").value);



        let result = document.querySelector("#result");

     // Checking the user providing a proper
    // value or not
        if (date === "" || isNaN(date) || date <=0 || date > 31)
        result.innerHTML = "Provide a valid Date!";
  
        else if (month === "" || isNaN(month) || month <=0 || month > 12)
        result.innerHTML = "Provide a valid Month!";

         else if (century === "" || isNaN(century))
        result.innerHTML = "Provide a valid century!";

         else if (digit === "" || isNaN(digit)) 
        result.innerHTML = "Provide valid year digits!";



 

 
    // If both input is valid, calculate the A
    else {
    
         // calculating Ghanian name
        let an =  ( ( (century/4) -2*century-1) + ((5*digit/4) ) + ((26*(month+1)/10)) + date ) % 7;

         // Dividing as per the an conditions(
 

         
          if (an = 0) result.innerHTML =
            `Sunday : <span>${an}</span>`;

            else if (an = 1) 
            result.innerHTML = 
                `Monday: <span>${an}</span>`;

                 else if (an = 2) 
            result.innerHTML = 
                `Tuesday: <span>${an}</span>`;

                 else if (an = 3) 
            result.innerHTML = 
                `Wednesday: <span>${an}</span>`;

                 else if (an = 4) 
            result.innerHTML = 
                `Thursday: <span>${an}</span>`;

                 else if (an = 5) 
            result.innerHTML = 
                `Friday: <span>${an}</span>`;

                else if (an = 6) 
            result.innerHTML = 
                `Saturday: <span>${an}</span>`;

                 else result.innerHTML =
            `Wrong data used : <span>${an}</span>`;

             }
            }

/*----------------------one html--------------------------------*/
 
/*----

window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. 
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.
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
            */
    

