
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

         // Dividing as per the an conditions
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
var coolform = angular.module('coolform', []);
coolform
  .directive('coolForm', function($timeout) {
    var ctrl = function($scope, $element, $attributes) {
      $scope.questions = [];
      $scope.activequestion = -1;
      $scope.answering = true;
      
      $scope.questions.push({'question': 'What\'s your name?'});
      $scope.questions.push({'question': 'How old are you?'});
      $scope.questions.push({'question': 'Where do you live?'});
      
      function removeOpen() {
        for(i=0;i<qs.length;i++){
          angular.element(qs[i]).removeClass('open');
        }
      }
      
      var scrolle = document.getElementById('form-wrapper');
      var qs = document.getElementsByClassName('question');
      
      $scope.open = function(order) {
        removeOpen();
        if (order >= $scope.questions.length || order < 0) {
          $scope.answering = false;
          if ($element.hasClass('answering')) {
            $element.removeClass('answering');
            $scope.activequestion = $scope.questions.length+1;
          }
        } else {
          $scope.answering = true;
          if (!$element.hasClass('answering')) {
            $element.addClass('answering');
          }
          //document.activeElement.blur();
          $scope.activequestion = order;
          var offset = qs[0].offsetTop;
          if(order !== 0) {offset = qs[order-1].offsetTop;}
          scrollToAndFocus(scrolle, offset, 500, order);
          if (!angular.element(qs[order]).hasClass('open')) {
            angular.element(qs[order]).addClass('open');
          }
        }

      }
      
      function scrollToAndFocus(element, to, duration, focus) {
          if (duration <= 10) {
            document.getElementById('q'+(focus)).focus();
            return;
          }
          var difference = to - element.scrollTop;
          var perTick = difference / duration * 10;
          window.setTimeout(function() {
              element.scrollTop = element.scrollTop + perTick;
              if (element.scrollTop === to) return;
              scrollToAndFocus(element, to, duration - 10, focus);
          }, 10);
      }
      
      
      var handler = function(e){
        if(e.keyCode === 37) {
          //left arrow
          e.preventDefault(); 
          $scope.$apply(function() {
            $scope.open($scope.activequestion-1);
          });
        }     
        if(e.keyCode === 39) {
          //right arrow
          e.preventDefault(); 
          $scope.$apply(function() {
            $scope.open($scope.activequestion+1);
          });
        }
        if(e.keyCode === 13) {
          //enter
          e.preventDefault(); 
          $scope.$apply(function() {
            $scope.open($scope.activequestion+1);
          });
        }
        if (e.keyCode == 9) {
          //tab
          e.preventDefault(); 
          $scope.$apply(function() { $scope.open($scope.activequestion+1);
          });
        } 
      };

      
      $element.on('keydown', handler);
      $scope.$on('$destroy',function(){
        $element.off('keydown', handler);
      });
      
      
      setTimeout(function() {
        $scope.activequestion++;
        $scope.$apply(function(){
          $scope.open($scope.activequestion);
        });
      }, 2000);
    };
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      link: ctrl,
      template: '<div ng-transclude id="form-wrapper" class="answering"></div>'
    };

  });

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
    

