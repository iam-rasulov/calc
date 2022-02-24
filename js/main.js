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
  
    elSpan.textContent = Math.round(elInputVal / Span);
    elSpan2.textContent = Math.round(elInputVal / Span2);
    elSpan3.textContent = Math.round(elInputVal / Span3);
    elSpan4.textContent = Math.round(elInputVal / Span4);
  
  });