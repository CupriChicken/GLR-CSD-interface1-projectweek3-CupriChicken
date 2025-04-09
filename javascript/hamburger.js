var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("visible");
});

document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("hamburger").classList.toggle("active");
});