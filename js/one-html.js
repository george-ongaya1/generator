 
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

            // Getting input from user into year variable.
    //Input is string so typecasting is necessary. //
    let genders = document.getElementsByName("gender");


        let result = document.querySelector("#result");


        //Function for gender
        function getGender () {
            for (let gender of genders){
              if (gender.checked){
                return gender.value;
              }
            }
          }
        
          let myGenderValue = getGender();
        
          console.log(myGenderValue);

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
            //creating arrays of Akan names for males and females
    let maleAkanNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kwaku", "Yaw", "Kofi", "Kwame"
      ];
    
      let femaleAkanNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
      ];
    
      //condition statement that validates input
      if (myGenderValue == "male" && monthValid && dayValid){
        switch (dayOfWeekNumber) {
          case 1:
            document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 2:
            document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 3:
            document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 4:
            document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 5:
            document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 6:
            document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 7:
            document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 0:
            document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          default:
            alert("mmh no Akan name for you");
    
        }
      } else if(myGenderValue == "female" && monthValid && dayValid) {
        switch (dayOfWeekNumber) {
          case 1:
            document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 2:
            document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            alert("Kwadwo");
            break;
          case 3:
            document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleAkanNames[2];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 4:
            document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleAkanNames[3];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 5:
            document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 6:
            document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 7:
            document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          case 0:
            document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
            document.getElementById('display-name').textContent = "Here is your Akan name: ";
            return false;
            break;
          default:
            alert("mmh no Akan name for you");
          }
        } else{
          alert("You entered invalid month or day");
        }
      