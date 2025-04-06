 // Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");
 // Loop through the "stars" NodeList
 stars.forEach((star, index1) => {
   // Add an event listener that runs a function when the "click" event is triggered
   star.addEventListener("click", () => {
     // Loop through the "stars" NodeList Again
     stars.forEach((star, index2) => {
       // Add the "active" class to the clicked star and any stars with a lower index
       // and remove the "active" class from any stars with a higher index
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });
 document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".search");
    const input = document.getElementById("site-search");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from reloading the page
  
      const query = input.value.trim().toLowerCase();
  
      if (query === "frankenstein") {
        window.location.href = "frank.html";
      } else if (query === "hamlet") {
        window.location.href = "hamlet.html";
      } else {
        alert("Sorry, that book is not available.");
      }
    });
  });
  