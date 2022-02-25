var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__control")
var elSpan = document.querySelector(".item__text__span")
var elSpan2 = document.querySelector(".item__text__span2")
var elSpan3 = document.querySelector(".item__text__span3")
var elSpan4 = document.querySelector(".item__text__span4")







elForm.addEventListener("submit", function(event){
    event.preventDefault();
  
    var elInputVal = elInput.value;
    var Span = 3.6;
    var Span2 = 20;
    var Span3 = 70;
    var Span4 = 800;

    function man(){
      return elInputVal / Span;
    }
    
    function bicycle(){
      return elInputVal / Span2;
    }
    
    function car(){
      return elInputVal / Span3;
    }
    
    function plane(){
      return elInputVal / Span4;
    }
  
    elSpan.textContent = man().toFixed(2);
    elSpan2.textContent = bicycle().toFixed(2);
    elSpan3.textContent = car().toFixed(2);
    elSpan4.textContent = plane().toFixed(2);
  
  });