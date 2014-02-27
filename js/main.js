//## Global page actions
// Deal with the contene of the click on the navbar and display the page correctly.
(function() {
  var activeElement = document.location.hash.slice(1);
  if (activeElement !== undefined && activeElement !== null) {
    var selector = "[data-page='" + activeElement + "']";
    document.querySelector("a" + selector).parentNode.classList.add('active');
    document.querySelector("div" + selector).hidden = false;
  }

})();
//Deal with the click on the menu items.
$('.navbar a[data-page]').on('click', function(event) {
  event.preventDefault();
  //Remove the  active class;
  document.querySelector('.navbar li.active').classList.remove('active');
  //Set the new active class.
  event.target.parentNode.classList.add('active');
  //Hide all the element
  Array.prototype.forEach.call(document.querySelectorAll("div[data-page]"), function(elt) {
    elt.hidden = true;
  });

  //Select the active part.
  var selector = "div[data-page='" + event.target.getAttribute('data-page') + "']";
  document.querySelector(selector).hidden = false;

  //Update the location url hash
  document.location.hash = "#" + event.target.getAttribute('data-page');
});