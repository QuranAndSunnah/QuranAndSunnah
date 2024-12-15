let currentPageIndex = 0; // Tracks the current page
let bookData = null; // Placeholder for JSON data

// Fetch JSON data and display the first page
fetch("pages.json")
  .then(response => response.json())
  .then(data => {
    bookData = data; // Save the JSON data
    document.getElementById("title").textContent = bookData.title; // Set the title
    displayPage(currentPageIndex); // Display the first page
  })
  .catch(error => {
    console.error("Error fetching JSON:", error);
    document.getElementById("content").textContent = "Failed to load content.";
  });

// Function to display a specific page
function displayPage(index) {
  const contentElement = document.getElementById("content");
  if (bookData && bookData.pages[index]) {
    contentElement.textContent = bookData.pages[index]; // Update content
  } else {
    contentElement.textContent = "Page not found.";
  }
}

// Navigation buttons
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPageIndex > 0) {
    currentPageIndex--; // Move to the previous page
    displayPage(currentPageIndex);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (bookData && currentPageIndex < bookData.pages.length - 1) {
    currentPageIndex++; // Move to the next page
    displayPage(currentPageIndex);
  }
});

// Get the button element by its ID
const homeButton = document.getElementById('homeButton');

// Add a click event listener to navigate to the homepage
homeButton.addEventListener('click', () => {
  window.location.href = 'index.html'; // Replace 'index.html' with your homepage path
});


