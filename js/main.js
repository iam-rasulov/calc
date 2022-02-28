var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__control")
var elSpan = document.querySelector(".item__text__span")
var elSpan2 = document.querySelector(".item__text__span2")
var elSpan3 = document.querySelector(".item__text__span3")
var elSpan4 = document.querySelector(".item__text__span4")







elForm.addEventListener("submit", function(event){
    event.preventDefault();
  
    var elInputVal = elInput.value;
    var elError = document.querySelector(".error")
    var Span = 3.6;
    var Span2 = 20;
    var Span3 = 70;
    var Span4 = 800;


  if(elInputVal <= 0 || isNaN(elInputVal)){

    elError.textContent =
    "Iltimos 0  dan katta raqam kiriting , yokida son kiriting" ;

    elError.classList.add("result-error");
    elError.classList.remove("result-success");


  }
  else{

    elError.textContent = "";

    elError.classList.remove("result-error");
    elError.classList.add("result-success");
  }



 

  



    // function man(){
    //   return elInputVal / Span;
    // }
    
    // function bicycle(){
    //   return elInputVal / Span2;
    // }
    
    // function car(){
    //   return elInputVal / Span3;
    // }
    
    // function plane(){
    //   return elInputVal / Span4;
    // }



    
  function calculateTime(distance, speed) {
  var hour = Math.floor(elInputVal / Span);
  var minute = Math.floor((elInputVal / Span - hour) * 60);
  return hour + ' soat ' + minute + ' minut ';
  }
  function calculateTime2(distance, speed) {
    var hour = Math.floor(elInputVal / Span2);
    var minute = Math.floor((elInputVal / Span2 - hour) * 60);
    return hour + ' soat ' + minute + ' minut ';
    }
    function calculateTime3(distance, speed) {
      var hour = Math.floor(elInputVal / Span3);
      var minute = Math.floor((elInputVal / Span3 - hour) * 60);
      return hour + ' soat ' + minute + ' minut ';
      }
      function calculateTime4(distance, speed) {
        var hour = Math.floor(elInputVal / Span4);
        var minute = Math.floor((elInputVal / Span4 - hour) * 60);
        return hour + ' soat ' + minute + ' minut ';
        }
    
  



  
    elSpan.textContent = calculateTime();
    elSpan2.textContent = calculateTime2();
    elSpan3.textContent = calculateTime3();
    elSpan4.textContent = calculateTime4();
  
  });