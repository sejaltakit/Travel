document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.elements[0].value;
    const destination = this.elements[1].value;
    document.getElementById("bookingMessage").textContent = 
      `Thank you ${name}, your trip to ${destination} has been booked!`;
    this.reset();
  });
  
  document.getElementById("reviewForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.elements[0].value;
    const review = this.elements[1].value;
  
    const reviewList = document.getElementById("reviewList");
    const reviewItem = document.createElement("div");
    reviewItem.innerHTML = `<strong>${name}</strong>: ${review}`;
    reviewList.appendChild(reviewItem);
  
    this.reset();
  });
  
  function updateProfile() {
    const newName = prompt("Enter your name:");
    if (newName) {
      document.getElementById("profileName").textContent = newName;
    }
  }
  