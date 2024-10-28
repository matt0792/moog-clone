document.addEventListener("wheel", function (e) {
  const scrollContainer = document.querySelector(".horizontal-scroll");

  // translate vertical scroll to horizontal scroll
  // Got a lot of help from stack overflow to achieve this
  if (e.deltaY !== 0) {
    scrollContainer.scrollLeft += e.deltaY;
    // To prevent vertical scroll
    e.preventDefault();
  }
});

// Sets modal to show when page is loaded 
window.onload = function() {
    document.getElementById('creditModal').style.display = 'block';
};

// Gets relevant items 
var modal = document.getElementById("creditModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Closes modal when x, or anywhere else is clicked 
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}