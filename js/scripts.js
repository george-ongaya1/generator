 
window.onload = () => {
    let button = document.querySelector("#btn");

// Function for calculating akan names
    button.addEventListener("click", calculateAkaneName);
    button.addEventListener("click", akaneGenerate);
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
        var an =  ( ( (century/4) -2*century-1) + ((5*digit/4) ) + ((26*(month+1)/10)) + date ) % 7;

         // Dividing as per the an conditions(
 
         
          if (an == 0||an<1) result.innerHTML =
            `Sunday : <span>${an}</span>`;

            else if (an == 1||an<2) 
            result.innerHTML = 
                `Monday: <span>${an}</span>`;

                 else if (an == 2||an<3)
            result.innerHTML = 
                `Tuesday: <span>${an}</span>`;

                 else if (an == 3||an<4) 
            result.innerHTML = 
                `Wednesday: <span>${an}</span>`;

                 else if (an == 4||an<5) 
            result.innerHTML = 
                `Thursday: <span>${an}</span>`;

                 else if (an == 5||an<6) 
            result.innerHTML = 
                `Friday: <span>${an}</span>`;

                else if (an == 6||an<7) 
            result.innerHTML = 
                `Saturday: <span>${an}</span>`;

                 else result.innerHTML =
            `Wrong data used : <span>${an}</span>`;

             }
            }
            /*-------------------------------------*/
            function  akaneGenerate() {
            //Adding the gender variable that will define the name//
               // Getting input from user into year variable.
            //Input is string so typecasting is necessary. //
            let digit = parseInt(document
            .querySelector("#gender").value);

             // Checking the user providing a proper
            // value or not
            let akane= document.querySelector("#akane");

        
            if (gender=== "" || gender <=1 || gender > 1)
            result.innerHTML = "Provide a valid Gender";

            else {

                var an = 
            }






            /*-------------------------------------*/