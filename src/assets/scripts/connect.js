var buttons = document.querySelectorAll(".connect");

if(buttons){
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    var link = button.querySelector('a');

    if (link) {
      link.click();
    }
  });
});
}