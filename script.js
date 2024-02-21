document.addEventListener("DOMContentLoaded", function() {
  // When the DOM is loaded, write "DOM load success" on the webpage
  var div = document.createElement("div");
  div.textContent = "DOM load success";
  document.body.appendChild(div);
});
