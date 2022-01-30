var textarea = document.querySelector("#input-area");
var allNumbers = document.querySelectorAll(".number");

document.querySelector(".number").addEventListener('click', function(e) {
    var currentText = textarea.value;
    var updatedText = currentText + e.target.value + ' ';
    textarea.value = updatedText;
});

document.querySelector(".operator").addEventListener("click", function (e) {
  var currentText = textarea.value;

  console.log("****",e.target);

  var updatedText = currentText + e.target.value + " ";

  textarea.value = updatedText;
});

