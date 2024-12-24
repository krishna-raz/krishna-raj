
//skill bar
 // Assign elements
 const techselect = document.querySelector("[tech-select]");
 const techSelectItems = document.querySelectorAll("[tech-select-item]");
 const techSelectValue = document.querySelector("[tech-select-value]");
 const techFilterBtn = document.querySelectorAll("[tech-filter-btn]");
 const techFilterItems = document.querySelectorAll("[tech-category]");

 // Toggle visibility for the dropdown menu
 techselect.addEventListener("click", function () {
   this.classList.toggle("active");
 });

 // Add event listeners to each dropdown item
 techSelectItems.forEach((item) => {
   item.addEventListener("click", function () {
     const selectedValue = item.getAttribute("tech-select-item").toLowerCase();
     techSelectValue.innerText = item.innerText; // Update selected value display
     techselect.classList.remove("active"); // Close dropdown
     techFilterFunc(selectedValue); // Apply the filter
   });
 });

 // Filter function to show/hide projects based on category
 const techFilterFunc = (selectedValue) => {
   techFilterItems.forEach((item) => {
     if (selectedValue === "all" || selectedValue === item.getAttribute("tech-category")) {
       item.classList.add("active"); // Show items
       item.style.display = "block"; // Ensure visibility
     } else {
       item.classList.remove("active"); // Hide items
       item.style.display = "none"; // Ensure hidden
     }
   });
 };

 // Handle filter buttons (for large screens)
 let lastClickedTechBtn = techFilterBtn[0]; // Default first button as active
 techFilterBtn.forEach((btn) => {
   btn.addEventListener("click", function () {
     const selectedValue = btn.getAttribute("tech-filter-btn").toLowerCase();
     techSelectValue.innerText = btn.innerText; // Sync dropdown value
     techFilterFunc(selectedValue); // Apply filter

     // Update button active state
     lastClickedTechBtn.classList.remove("active");
     btn.classList.add("active");
     lastClickedTechBtn = btn;
   });
 });

 // Ensure "All" is selected initially (fallback for page load)
 document.addEventListener("DOMContentLoaded", function () {
   techFilterFunc("all");
 });